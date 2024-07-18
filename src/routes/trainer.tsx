import { gql } from "../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { TRAINER_ID } from "../components/party-sidebar";
import Pokeball from "../assets/pokeball-sm.svg";
import { useState } from "react";
import { CircleMinus, Save, PencilOff, Pencil } from "lucide-react";
import { DELETE_FROM_PARTY } from "../graphql/mutations/delete-pokemon-from-party";

const GET_TRAINER = gql(`
  query GetTrainer($id: Int!) {
    trainer(id: $id) {
      id
      name
      party {
        id
        name
      }
    }
  }    
`);

const EDIT_TRAINER_NAME = gql(`
  mutation editTrainerName($trainerId: Int!, $name: String!) {
    editTrainerName(trainerId: $trainerId, name: $name) {
      id
      name
    }
  }
`);

const TrainerPage = () => {
  const [updatedName, setUpdatedName] = useState("");
  const [isEditTrainerMode, setIsEditTrainerMode] = useState(false);
  const [isEditPartyMode, setIsEditPartyMode] = useState(false);

  const { data, loading, error } = useQuery(GET_TRAINER, {
    variables: {
      id: TRAINER_ID,
    },
  });

  const [deleteFromParty] = useMutation(DELETE_FROM_PARTY, {
    update(cache, { data }) {
      const removedPokemon = data?.removePokemonFromParty;

      if (removedPokemon) {
        cache.modify({
          id: cache.identify({
            __typename: "Trainer",
            id: TRAINER_ID,
          }),
          fields: {
            party(existingPartyRefs = [], { readField }) {
              const monToRemoveIndex = existingPartyRefs.findIndex(
                (ref) => readField("id", ref) === removedPokemon.id
              );

              if (!monToRemoveIndex) return existingPartyRefs;

              return existingPartyRefs
                .slice(0, monToRemoveIndex)
                .concat(existingPartyRefs.slice(monToRemoveIndex + 1));
            },
          },
        });
      }
    },
  });

  const [editTrainerName] = useMutation(EDIT_TRAINER_NAME);

  const handleEditTrainerToggle = () => {
    if (isEditTrainerMode) {
      // Call the mutation with the updated name when toggling off the edit mode
      editTrainerName({
        variables: {
          trainerId: TRAINER_ID,
          name: updatedName,
        },
      });
    }
    setIsEditTrainerMode((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (data?.trainer) {
    const { trainer } = data;

    return (
      <div className="my-8 mx-auto w-full max-w-[1000px] space-y-12">
        <h1 className="text-3xl font-semibold">Trainer</h1>
        <section className="relative flex items-center rounded-lg space-y-3 space-x-6 py-4 px-3">
          <button
            onClick={() => {
              handleEditTrainerToggle();
            }}
            className="text-sm absolute flex flex-col space-y-3 items-center top-0 right-0 p-2 rounded-full hover:scale-110 hover:shadow-md transform transition-transform duration-200"
            aria-label={
              isEditTrainerMode ? "Done editing trainer" : "Edit trainer"
            }
          >
            {isEditTrainerMode ? (
              <Save className="w-6 h-6" />
            ) : (
              <Pencil className="w-6 h-6" />
            )}
          </button>

          <div className="w-[125px] h-[125px] rounded-full overflow-hidden ">
            <img
              src="https://static.wixstatic.com/media/2a44af_326b425cd93d436e885ba47fe78d1be5~mv2.jpg/v1/fill/w_558,h_485,al_c,lg_1,q_80,enc_auto/2a44af_326b425cd93d436e885ba47fe78d1be5~mv2.jpg"
              alt="Nessa"
              className="w-full h-full "
            />
          </div>
          <div className="text-2xl font-semibold">
            {isEditTrainerMode ? (
              <label>
                Name:
                <input
                  type="text"
                  defaultValue={trainer.name ?? ""}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="border border-2 rounded-md ml-3 p-2 font-normal"
                />
              </label>
            ) : (
              trainer.name
            )}
          </div>
        </section>
        <hr />
        <section className="relative rounded-lg space-y-3 py-4 px-3">
          <button
            aria-label={isEditPartyMode ? "Done editing party" : "Edit party"}
            onClick={() => setIsEditPartyMode((prev) => !prev)}
            className="text-sm absolute flex flex-col space-y-3 items-center top-0 right-0 p-2 rounded-full hover:scale-110 hover:shadow-md transform transition-transform duration-200"
          >
            {isEditPartyMode ? (
              <PencilOff className="w-6 h-6" />
            ) : (
              <Pencil className="w-6 h-6" />
            )}
          </button>

          <h2 className="text-2xl font-semibold">Party</h2>
          {Array.isArray(trainer?.party) && trainer?.party.length ? (
            <ul className="w-[800px] grid grid-cols-3 gap-4 mx-auto">
              {trainer.party.map((pokemon, index) => {
                // image id needs to be 3 digits, so we need to pad with 0s
                const imageId = pokemon?.id.toString().padStart(3, "0");
                return (
                  <li
                    key={index}
                    className="relative flex flex-col items-center space-y-2 py-4 px-3"
                  >
                    {isEditPartyMode ? (
                      <button
                        onClick={() => {
                          if (pokemon?.id) {
                            deleteFromParty({
                              variables: {
                                trainerId: TRAINER_ID,
                                pokemonId: pokemon.id,
                              },
                            });
                          }
                        }}
                        className="absolute top-[15px] left-[12px] w-[30px] h-[30px] rounded-full hover:scale-110 hover:shadow-md transform transition-transform duration-200"
                      >
                        <CircleMinus className="w-full h-full text-gray-500 fill-white" />
                      </button>
                    ) : null}

                    <div className="h-[125px] w-[125px]">
                      <img
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageId}.png`}
                        alt={`Pokemon id ${pokemon?.id}` ?? ""}
                        className="max-h-full bg-no-repeat bg-center bg-contain bg-[length:90%] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.5)]"
                        style={{ backgroundImage: `url(${Pokeball})` }}
                      />
                    </div>
                    <div className="capitalize font-semibold text-lg">
                      {pokemon?.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No Pokemon in party</p>
          )}
        </section>
      </div>
    );
  }
};

export default TrainerPage;
