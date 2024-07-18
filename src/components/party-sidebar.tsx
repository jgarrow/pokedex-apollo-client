import { useQuery } from "@apollo/client";
import { GET_PARTY } from "../graphql/queries/get-party";
import Pokeball from "../assets/pokeball-sm.svg";
import { Link } from "react-router-dom";

export const TRAINER_ID = 1;

const PartySidebar = () => {
  const { data, loading, error } = useQuery(GET_PARTY, {
    variables: { id: TRAINER_ID },
  });

  if (error) return <div>Error! {error.message}</div>;

  if (loading) return <p>Loading...</p>;

  const party = data?.trainer?.party ?? [];

  return (
    <div className="w-[100px] h-full min-h-[100dvh] flex flex-col border-0 border-r-2 border-r-solid border-sky-50 bg-gradient-to-b from-sky-100 to-sky-50">
      <h2 className="text-2xl uppercase font-bold text-center my-8 leading-1">
        Party
      </h2>
      {party.length ? (
        <ul className="flex flex-col space-y-4 items-center">
          {party.map((pokemon) => {
            // image id needs to be 3 digits, so we need to pad with 0s
            const imageId = pokemon?.id.toString().padStart(3, "0");
            return (
              <li key={pokemon?.id} className="w-[75px] h-[75px]">
                <img
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageId}.png`}
                  alt={`Pokemon id ${pokemon?.id}` ?? ""}
                  className="max-h-full bg-no-repeat bg-center bg-contain bg-[length:90%] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.5)]"
                  style={{ backgroundImage: `url(${Pokeball})` }}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Pokemon in party</p>
      )}

      <Link
        to="/trainer"
        className="w-[75px] h-[75px] rounded-full overflow-hidden self-center mt-auto mb-8 cursor-pointer"
      >
        <img
          src="https://static.wixstatic.com/media/2a44af_326b425cd93d436e885ba47fe78d1be5~mv2.jpg/v1/fill/w_558,h_485,al_c,lg_1,q_80,enc_auto/2a44af_326b425cd93d436e885ba47fe78d1be5~mv2.jpg"
          alt="Nessa"
          className="w-full h-full"
        />
      </Link>
    </div>
  );
};

export default PartySidebar;
