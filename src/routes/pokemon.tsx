import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";
import PokemonCard from "../components/pokemon-card";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GET_PARTY } from "../graphql/queries/get-party";
import PartySidebar from "../components/party-sidebar";

const GET_POKEMON = gql(`
  query GetPokemonList($page: Int, $pageSize: Int, $filter: Boolean) {
    allPokemon(page: $page, pageSize: $pageSize, filter: $filter) {
      id
      name
      nat_dex_num
      types {
        id
        name
      }
      dominant_color {
        light
        dark
        original
      }
    }
  }
`);

export default function Pokemon() {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const pageSize = Number(params.get("pageSize")) || 20;
  const filter = Boolean(params.get("filter")) || true;
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { page, pageSize, filter },
  });

  const {
    data: partyData,
    loading: partyLoading,
    error: partyError,
  } = useQuery(GET_PARTY, {
    variables: { id: 1 },
  });

  const goToNextPage = () => {
    setParams({
      page: String(page + 1),
      pageSize: String(pageSize),
      filter: String(filter),
    });
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setParams({
        page: String(page - 1),
        pageSize: String(pageSize),
        filter: String(filter),
      });
    }
  };

  if (error || partyError)
    return <div>Error! {error?.message ?? partyError?.message}</div>;

  if (loading || partyLoading) return <div>Loading...</div>;

  if (data?.allPokemon) {
    const trainerParty = partyData?.trainer?.party ?? [];

    return (
      <div className="w-full h-full min-h-[100dvh] flex">
        <PartySidebar />
        <div className="py-8 px-6 w-[calc(100%-100px)] h-[100dvh] overflow-y-scroll">
          <h1 className="text-2xl text-center uppercase font-semibold">Pokédex</h1>
          <div className="flex flex-col h-full pb-8">
            <div className="flex justify-between mb-6 w-full">
              <button
                onClick={goToPreviousPage}
                disabled={page <= 1}
                className="flex spacing-x-2"
              >
                <ChevronLeft className="w-[18px]" />
                Previous
              </button>
              <button onClick={goToNextPage} className="flex spacing-x-2">
                Next <ChevronRight className="w-[18px]" />
              </button>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {data.allPokemon.map((pokemon) => (
                <li key={pokemon?.id}>
                  <PokemonCard pokemon={pokemon} trainerParty={trainerParty} />
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6 mb-8 w-full">
              <button
                onClick={goToPreviousPage}
                disabled={page <= 1}
                className="flex spacing-x-2"
              >
                <ChevronLeft className="w-[18px]" />
                Previous
              </button>
              <button onClick={goToNextPage} className="flex spacing-x-2">
                Next <ChevronRight className="w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
