import { gql } from "../__generated__/";
import { useMutation } from "@apollo/client";
import cn from "../utils/cn";
import { Link } from "react-router-dom";
import AddToPartyButton from "./add-to-party-button";
import InPartyIndicator from "./party-indicator-button";
import { TRAINER_ID } from "./party-sidebar";
import type {
  GetPartyQuery,
  GetPokemonListQuery,
} from "../__generated__/graphql";

export const ADD_TO_PARTY = gql(`
  mutation AddToParty($trainerId: Int!, $pokemonId: Int!) {
    addPokemonToParty(trainerId: $trainerId, pokemonId: $pokemonId) {
      id
    }
  }
`);

type Pokemon = NonNullable<GetPokemonListQuery["allPokemon"]>[number];
type Trainer = NonNullable<GetPartyQuery["trainer"]>;
type Party = NonNullable<Trainer["party"]>;

export default function PokemonCard({
  pokemon,
  trainerParty,
  className,
}: {
  pokemon: Pokemon;
  trainerParty: Party | [];
  className?: string;
}) {
  const [addToParty] = useMutation(ADD_TO_PARTY, {
    variables: {
      trainerId: TRAINER_ID,
      pokemonId: pokemon!.id,
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
              const newPokemonRef = cache.readFragment({
                id: cache.identify(newPokemon),
                fragment: gql(`
                  fragment NewPokemon on Pokemon {
                    id
                  }
                `),
              });

              return [...existingPartyRefs, newPokemonRef];
            },
          },
        });
      }
    },
  });

  if (!pokemon) return null;

  const gradient1 = pokemon?.dominant_color?.light ?? "white";
  const gradient2 = pokemon?.dominant_color?.original ?? "gray";
  const gradient3 = pokemon?.dominant_color?.dark ?? "black";

  // image id needs to be 3 digits, so we need to pad with 0s
  const imageId = pokemon.id?.toString().padStart(3, "0");

  // get count of number of times this pokemon is in the party
  // based on if pokemon.id is in trainerParty (trainerParty can have duplicates)
  const partyCountArr = trainerParty.filter(
    (partyMon) => partyMon?.id === pokemon.id
  );

  return (
    <div className="relative">
      <div className="absolute z-10 top-[6px] left-[6px]">
        <AddToPartyButton
          pokemonName={pokemon?.name ?? ""}
          onClick={() => {
            addToParty();
          }}
        />
      </div>

      <div
        className="absolute z-10 flex flex-col space-y-2"
        style={{
          top: "6px",
          right: "6px",
        }}
      >
        {partyCountArr.length
          ? partyCountArr.map((partyMon, i) => (
              <InPartyIndicator
                key={`party-${partyMon?.id}-${i}`}
                pokemonName={pokemon?.name ?? ""}
                pokemonId={partyMon!.id}
              />
            ))
          : null}
      </div>
      <div
        className={cn(
          "relative rounded-lg p-4 shadow-lg text-center h-full flex flex-col items-center overflow-hidden",
          className
        )}
        style={{
          background: `linear-gradient(45deg, ${gradient1}, ${gradient2}, ${gradient3})`,
        }}
      >
        {pokemon.nat_dex_num ? (
          <div
            className="absolute bottom-[-2rem] left-0 text-[4rem] text-gray-50/30"
            style={{
              fontSize: "11rem",
              lineHeight: "1",
              height: "fit-content",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 0,
            }}
          >
            {pokemon.nat_dex_num.toString().padStart(3, "0")}
          </div>
        ) : null}

        <Link to={`/pokemon/${pokemon.id}`} className="cursor-pointer">
          <div className="flex items-center justify-center h-32 z-0">
            <img
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageId}.png`}
              alt={pokemon?.name ?? ""}
              className="max-h-full bg-no-repeat bg-center bg-contain bg-[length:90%] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.5)]"
            />
          </div>
          <h2 className="capitalize text-xl mt-2 text-contrast z-0">
            {pokemon?.name}
          </h2>
        </Link>

        {pokemon?.types ? (
          <ul
            className={cn(
              "z-0 p-0 flex items-center w-[80px] m-0 mt-1",
              pokemon.types.length > 1 ? "justify-between" : "justify-center"
            )}
          >
            {pokemon.types.map((type) => (
              <li key={type?.id} className="w-[30px] h-[30px] list-none">
                <img
                  src={`https://raw.githubusercontent.com/jgarrow/pokedex/main/src/images/type-icons/${type?.name}_icon_SwSh.png`}
                  alt={`${pokemon?.name}-type-${type}`}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
