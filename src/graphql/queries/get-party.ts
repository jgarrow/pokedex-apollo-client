import { gql } from "../../__generated__";

export const GET_PARTY = gql(`
    query GetParty($id: Int!) {
      trainer(id: $id) {
        id
        name
        party {
          id
        }
      }
    }
  `);
