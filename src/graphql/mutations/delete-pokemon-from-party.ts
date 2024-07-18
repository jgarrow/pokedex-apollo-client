import { gql } from "../../__generated__";

export const DELETE_FROM_PARTY = gql(`
    mutation deleteFromParty($trainerId: Int!, $pokemonId: Int!) {
        removePokemonFromParty(trainerId: $trainerId, pokemonId: $pokemonId) {
            id
        }
    }
`);
