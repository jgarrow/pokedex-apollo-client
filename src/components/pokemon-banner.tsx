import cn from "../utils/cn";
import { FragmentType, gql, useFragment } from "../__generated__";

const PokemonBannerFragment = gql(`
  fragment PokemonBanner on Pokemon {
    id
    name
    nat_dex_num
    types {
      id
      name
    }
  }
`);

const PokemonBanner = (props: {
  pokemon: FragmentType<typeof PokemonBannerFragment> | undefined;
}) => {
  const pokemon = useFragment(PokemonBannerFragment, props.pokemon);

  if (!pokemon) return null;

  // image id needs to be 3 digits, so we need to pad with 0s
  const imageId = pokemon.id.toString().padStart(3, "0");

  return (
    <div className="h-[50dvh] max-h-500px w-full relative flex flex-col items-center">
      {pokemon.nat_dex_num ? (
        <div
          className="absolute text-gray-50/30"
          style={{
            fontSize: "40rem",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        >
          {pokemon.nat_dex_num.toString().padStart(3, "0")}
        </div>
      ) : null}
      <div className="flex items-center justify-center h-full max-h-[400px] z-0 ">
        <img
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageId}.png`}
          alt={pokemon?.name ?? ""}
          className="max-h-full bg-no-repeat bg-center bg-contain bg-[length:90%] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.5)]"
        />
      </div>
      <h1 className="capitalize text-[4rem] mt-2 text-contrast z-0 relative top-[-5px]">
        {pokemon?.name}
      </h1>

      {pokemon?.types ? (
        <ul
          className={cn(
            "z-0 p-0 flex items-center w-[100px] m-0",
            pokemon.types.length > 1 ? "justify-between" : "justify-center"
          )}
        >
          {pokemon.types.map((type) => (
            <li key={type?.id} className="w-[40px] h-[40px] list-none">
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
  );
};

export default PokemonBanner;
