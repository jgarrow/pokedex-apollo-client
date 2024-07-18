import { useParams } from "react-router-dom";
import { gql } from "../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TO_PARTY } from "../components/pokemon-card";
import AddToPartyButton from "../components/add-to-party-button";
import InPartyIndicator from "../components/party-indicator-button";
import PokemonBanner from "../components/pokemon-banner";
import { TRAINER_ID } from "../components/party-sidebar";
import { GET_PARTY } from "../graphql/queries/get-party";

const GET_SINGLE_POKEMON = gql(`
  query GetSinglePokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name
      ...PokemonBanner
      dominant_color {
        light
        dark
        original
      }
    }
  }
`);

const PokemonPage = () => {
  const { pokemonId } = useParams();
  const { data, loading, error } = useQuery(GET_SINGLE_POKEMON, {
    variables: { id: Number(pokemonId) },
  });

  const {
    data: trainerData,
    loading: trainerLoading,
    error: trainerError,
  } = useQuery(GET_PARTY, {
    variables: { id: TRAINER_ID },
  });

  const [addToParty] = useMutation(ADD_TO_PARTY, {
    variables: {
      trainerId: TRAINER_ID,
      pokemonId: Number(pokemonId),
    },
    update(cache, { data }) {
      const newPokemon = data?.addPokemonToParty;
      if (newPokemon) {
        cache.modify({
          id: cache.identify({
            __typename: "Trainer",
            id: TRAINER_ID,
          }),
          fields: {
            party(existingPartyRefs = []) {
              const newPokemonRef = cache.writeFragment({
                id: cache.identify(newPokemon),
                fragment: gql(`
                  fragment NewPokemon on Pokemon {
                    id
                  }
                `),
                data: newPokemon,
              });

              return [...existingPartyRefs, newPokemonRef];
            },
          },
        });
      }
    },
  });

  if (loading || trainerLoading) return <p>Loading...</p>;

  if (error || trainerError)
    return <div>Error! {error?.message ?? trainerError?.message}</div>;

  if (data?.pokemon) {
    const trainerParty = trainerData?.trainer?.party ?? [];
    const { pokemon } = data;

    const gradient1 = pokemon?.dominant_color?.light ?? "white";
    const gradient2 = pokemon?.dominant_color?.original ?? "gray";
    const gradient3 = pokemon?.dominant_color?.dark ?? "black";

    // get count of number of times this pokemon is in the party
    // based on if pokemon.id is in trainerParty (trainerParty can have duplicates)
    const partyCountArr = trainerParty.filter(
      (partyMon) => partyMon?.id === pokemon.id
    );

    return (
      <div
        className="mx-auto relative w-full h-full min-h-[100dvh]"
        style={{
          background: `linear-gradient(45deg, ${gradient1}, ${gradient2}, ${gradient3})`,
        }}
      >
        <div className="w-full h-full h-full min-h-[100dvh] py-16 px-8">
          <div className="absolute z-10 top-[32px] left-[32px]">
            <AddToPartyButton
              pokemonName={pokemon?.name ?? ""}
              onClick={() => {
                addToParty();
              }}
              className="w-[50px] h-[50px] hover:scale-110 transform transition-transform duration-200"
            />
          </div>
          <div
            className="absolute z-10 flex flex-col space-y-3"
            style={{
              top: "32px",
              right: "32px",
            }}
          >
            {partyCountArr.length
              ? partyCountArr.map((partyMon, i) => (
                  <InPartyIndicator
                    key={`party-${partyMon?.id}-${i}`}
                    id={`party-${partyMon?.id}-${i}`}
                    pokemonName={pokemon?.name ?? ""}
                    pokemonId={partyMon!.id}
                    className="w-[50px] h-[50px] relative hover:scale-110 transform transition-transform duration-200"
                  />
                ))
              : null}
          </div>

          <PokemonBanner pokemon={pokemon} />
        </div>
      </div>
    );
  }
};

export default PokemonPage;
