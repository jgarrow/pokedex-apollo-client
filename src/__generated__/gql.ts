/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment PokemonBanner on Pokemon {\n    id\n    name\n    nat_dex_num\n    types {\n      id\n      name\n    }\n  }\n": types.PokemonBannerFragmentDoc,
    "\n  mutation AddToParty($trainerId: Int!, $pokemonId: Int!) {\n    addPokemonToParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n      id\n    }\n  }\n": types.AddToPartyDocument,
    "\n                  fragment NewPokemon on Pokemon {\n                    id\n                  }\n                ": types.NewPokemonFragmentDoc,
    "\n    mutation deleteFromParty($trainerId: Int!, $pokemonId: Int!) {\n        removePokemonFromParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n            id\n        }\n    }\n": types.DeleteFromPartyDocument,
    "\n    query GetParty($id: Int!) {\n      trainer(id: $id) {\n        id\n        name\n        party {\n          id\n        }\n      }\n    }\n  ": types.GetPartyDocument,
    "\n  query GetSinglePokemon($id: Int!) {\n    pokemon(id: $id) {\n      id\n      name\n      ...PokemonBanner\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n": types.GetSinglePokemonDocument,
    "\n  query GetPokemonList($page: Int, $pageSize: Int, $filter: Boolean) {\n    allPokemon(page: $page, pageSize: $pageSize, filter: $filter) {\n      id\n      name\n      nat_dex_num\n      types {\n        id\n        name\n      }\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n": types.GetPokemonListDocument,
    "\n  query GetTrainer($id: Int!) {\n    trainer(id: $id) {\n      id\n      name\n      party {\n        id\n        name\n      }\n    }\n  }    \n": types.GetTrainerDocument,
    "\n  mutation editTrainerName($trainerId: Int!, $name: String!) {\n    editTrainerName(trainerId: $trainerId, name: $name) {\n      id\n      name\n    }\n  }\n": types.EditTrainerNameDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PokemonBanner on Pokemon {\n    id\n    name\n    nat_dex_num\n    types {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonBanner on Pokemon {\n    id\n    name\n    nat_dex_num\n    types {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddToParty($trainerId: Int!, $pokemonId: Int!) {\n    addPokemonToParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddToParty($trainerId: Int!, $pokemonId: Int!) {\n    addPokemonToParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                  fragment NewPokemon on Pokemon {\n                    id\n                  }\n                "): (typeof documents)["\n                  fragment NewPokemon on Pokemon {\n                    id\n                  }\n                "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation deleteFromParty($trainerId: Int!, $pokemonId: Int!) {\n        removePokemonFromParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation deleteFromParty($trainerId: Int!, $pokemonId: Int!) {\n        removePokemonFromParty(trainerId: $trainerId, pokemonId: $pokemonId) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetParty($id: Int!) {\n      trainer(id: $id) {\n        id\n        name\n        party {\n          id\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GetParty($id: Int!) {\n      trainer(id: $id) {\n        id\n        name\n        party {\n          id\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSinglePokemon($id: Int!) {\n    pokemon(id: $id) {\n      id\n      name\n      ...PokemonBanner\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSinglePokemon($id: Int!) {\n    pokemon(id: $id) {\n      id\n      name\n      ...PokemonBanner\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPokemonList($page: Int, $pageSize: Int, $filter: Boolean) {\n    allPokemon(page: $page, pageSize: $pageSize, filter: $filter) {\n      id\n      name\n      nat_dex_num\n      types {\n        id\n        name\n      }\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPokemonList($page: Int, $pageSize: Int, $filter: Boolean) {\n    allPokemon(page: $page, pageSize: $pageSize, filter: $filter) {\n      id\n      name\n      nat_dex_num\n      types {\n        id\n        name\n      }\n      dominant_color {\n        light\n        dark\n        original\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTrainer($id: Int!) {\n    trainer(id: $id) {\n      id\n      name\n      party {\n        id\n        name\n      }\n    }\n  }    \n"): (typeof documents)["\n  query GetTrainer($id: Int!) {\n    trainer(id: $id) {\n      id\n      name\n      party {\n        id\n        name\n      }\n    }\n  }    \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editTrainerName($trainerId: Int!, $name: String!) {\n    editTrainerName(trainerId: $trainerId, name: $name) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation editTrainerName($trainerId: Int!, $name: String!) {\n    editTrainerName(trainerId: $trainerId, name: $name) {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;