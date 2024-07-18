/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Ability = {
  __typename?: 'Ability';
  description?: Maybe<Scalars['String']['output']>;
  effect?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_hidden?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** array of Pokemon that can have the queried Ability */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type DexEntry = {
  __typename?: 'DexEntry';
  description?: Maybe<Scalars['String']['output']>;
  /** game/version the queried DexEntry is from */
  game?: Maybe<Game>;
};

export type Dominant_Color = {
  __typename?: 'Dominant_Color';
  b?: Maybe<Scalars['Int']['output']>;
  dark?: Maybe<Scalars['String']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  light?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type EggGroup = {
  __typename?: 'EggGroup';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** array of Pokemon in the queried egg group */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
};

/** EvolutionCriteria can be one or more of several possible different types */
export type EvolutionCriteria = Gender | Item | Location | Move | OtherEvolutionCriteria | Type;

export type Game = {
  __typename?: 'Game';
  generation?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** array of Regions that are found in the queried Game */
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type Gender = {
  __typename?: 'Gender';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Item = {
  __typename?: 'Item';
  bag_pocket?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Use in an evolution_criteria query; returns the name of the evolution criteria that must have been met for the Pokémon to have evolved */
  effect?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sprite?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** array of games/versions in which pokemon are found at the queried Location */
  games?: Maybe<Array<Maybe<Game>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** array of Pokemon that can be found at the queried Location */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
  region?: Maybe<Region>;
};

export type Move = {
  __typename?: 'Move';
  accuracy?: Maybe<Scalars['Int']['output']>;
  ailment?: Maybe<Scalars['String']['output']>;
  /** physical or special */
  damage_class?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** possible status condition effect */
  effect?: Maybe<Scalars['String']['output']>;
  effect_chance?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** level, egg, move tutor, tm/hm */
  learn_methods?: Maybe<Array<Maybe<MoveLearnMethod>>>;
  name?: Maybe<Scalars['String']['output']>;
  original_games?: Maybe<Array<Maybe<Game>>>;
  power?: Maybe<Scalars['Int']['output']>;
  pp?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Type>;
};

export type MoveDescription = {
  __typename?: 'MoveDescription';
  description?: Maybe<Scalars['String']['output']>;
  games?: Maybe<Array<Maybe<Game>>>;
};

export type MoveLearnMethod = {
  __typename?: 'MoveLearnMethod';
  games?: Maybe<Array<Maybe<Game>>>;
  level_learned_at?: Maybe<Scalars['Int']['output']>;
  /** how the Pokemon learns the queried Move */
  method?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPokemonToParty?: Maybe<Pokemon>;
  editTrainerName?: Maybe<Trainer>;
  removePokemonFromParty?: Maybe<Pokemon>;
};


export type MutationAddPokemonToPartyArgs = {
  pokemonId: Scalars['Int']['input'];
  trainerId: Scalars['Int']['input'];
};


export type MutationEditTrainerNameArgs = {
  name: Scalars['String']['input'];
  trainerId: Scalars['Int']['input'];
};


export type MutationRemovePokemonFromPartyArgs = {
  pokemonId: Scalars['Int']['input'];
  trainerId: Scalars['Int']['input'];
};

export type NameAndId = {
  __typename?: 'NameAndId';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type OtherEvolutionCriteria = {
  __typename?: 'OtherEvolutionCriteria';
  /** example response: time_of_day */
  evolution_criteria_name?: Maybe<Scalars['String']['output']>;
  /** example response: night */
  value?: Maybe<Scalars['String']['output']>;
};

/** query for an individual Pokemon's info */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** array of Abilities that the queried Pokemon can have */
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']['output']>;
  base_happiness?: Maybe<Scalars['Int']['output']>;
  /** base stats of the queried Pokemon */
  base_stats?: Maybe<Stats>;
  /** capture rate of the queried Pokemon when using a normal Pokeball at full health */
  capture_rate?: Maybe<Scalars['Int']['output']>;
  /** basic color of the queried Pokemon */
  color?: Maybe<Scalars['String']['output']>;
  /** dominant color of the queried Pokemon's image */
  dominant_color?: Maybe<Dominant_Color>;
  /** array of the different EggGroups that the queried Pokemon belongs to */
  egg_groups?: Maybe<Array<Maybe<EggGroup>>>;
  /** the Pokemon at the 'beginning' of the queried Pokemon's evolution chain (i.e. Charmander, even if you requested Charizard) */
  evolution_chain_start: Pokemon;
  /** array of all criteria that must be met for the queried Pokemon to evolve */
  evolution_criteria?: Maybe<Array<Maybe<EvolutionCriteria>>>;
  /** what triggers the queried Pokemon to evolve if all evolution criteria have been met */
  evolution_trigger?: Maybe<Scalars['String']['output']>;
  /** Pokemon that the queried Pokemon evolves from */
  evolves_from?: Maybe<Pokemon>;
  /** array of Pokemon that the queried Pokemon can evolve into */
  evolves_to?: Maybe<Array<Maybe<Pokemon>>>;
  /** array of Games that the queried Pokemon is found in */
  games?: Maybe<Array<Maybe<Game>>>;
  /** percent chance of the queried Pokémon being female (-1 for genderless) */
  gender_rate?: Maybe<Scalars['Float']['output']>;
  /** which generation the queried Pokemon debuted in */
  generation?: Maybe<Scalars['String']['output']>;
  genus?: Maybe<Scalars['String']['output']>;
  growth_rate?: Maybe<Scalars['String']['output']>;
  hatch_counter?: Maybe<Scalars['Int']['output']>;
  /** height in meters */
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  is_baby?: Maybe<Scalars['Boolean']['output']>;
  /** true if it's the default form, false if it's a variant (i.e. alola, galar, mega, etc) */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** array of Locations that the queried Pokemon can be found in */
  locations?: Maybe<Array<Maybe<Location>>>;
  /** array of Move objects */
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']['output']>;
  nat_dex_num?: Maybe<Scalars['Int']['output']>;
  /** array of DexEntry objects */
  pokedex_entries?: Maybe<Array<Maybe<DexEntry>>>;
  shape?: Maybe<Scalars['String']['output']>;
  /** array of Sprite objects */
  sprites?: Maybe<Sprites>;
  /** array of all the different Types of the queried Pokemon */
  types?: Maybe<Array<Maybe<Type>>>;
  /** array of different variant forms of the queried Pokemon */
  variants?: Maybe<Array<Maybe<Pokemon>>>;
  /** weight in kilograms */
  weight?: Maybe<Scalars['Int']['output']>;
};


/** query for an individual Pokemon's info */
export type PokemonAbilitiesArgs = {
  game?: InputMaybe<Scalars['String']['input']>;
};


/** query for an individual Pokemon's info */
export type PokemonEvolution_CriteriaArgs = {
  game?: InputMaybe<Scalars['String']['input']>;
};


/** query for an individual Pokemon's info */
export type PokemonMovesArgs = {
  game: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  ability?: Maybe<Ability>;
  allAbilities?: Maybe<Array<Maybe<Ability>>>;
  allEggGroups?: Maybe<Array<Maybe<EggGroup>>>;
  allGames?: Maybe<Array<Maybe<Game>>>;
  allItems?: Maybe<Array<Maybe<Item>>>;
  allLocations?: Maybe<Array<Maybe<Location>>>;
  allMoves?: Maybe<Array<Maybe<Move>>>;
  /** get a list of Pokemon starting at the given page number */
  allPokemon?: Maybe<Array<Maybe<Pokemon>>>;
  allRegions?: Maybe<Array<Maybe<Region>>>;
  allTypes?: Maybe<Array<Maybe<Type>>>;
  eggGroup?: Maybe<EggGroup>;
  game?: Maybe<Game>;
  item?: Maybe<Item>;
  location?: Maybe<Location>;
  move?: Maybe<Move>;
  pokemon?: Maybe<Pokemon>;
  region?: Maybe<Region>;
  trainer?: Maybe<Trainer>;
  type?: Maybe<Type>;
};


export type QueryAbilityArgs = {
  game?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryAllPokemonArgs = {
  filter?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllTypesArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEggGroupArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGameArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMoveArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPokemonArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRegionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTypeArgs = {
  id: Scalars['Int']['input'];
};

export type Region = {
  __typename?: 'Region';
  /** array of Games the queried Region is found in */
  games?: Maybe<Array<Maybe<Game>>>;
  id: Scalars['Int']['output'];
  /** array of Locations that are in the queried Region */
  locations?: Maybe<Array<Maybe<Location>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Sprites = {
  __typename?: 'Sprites';
  back_default?: Maybe<Scalars['String']['output']>;
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default?: Maybe<Scalars['String']['output']>;
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
};

export type Stats = {
  __typename?: 'Stats';
  attack?: Maybe<Scalars['Int']['output']>;
  defense?: Maybe<Scalars['Int']['output']>;
  hp?: Maybe<Scalars['Int']['output']>;
  special_attack?: Maybe<Scalars['Int']['output']>;
  special_defense?: Maybe<Scalars['Int']['output']>;
  speed?: Maybe<Scalars['Int']['output']>;
};

export type Trainer = {
  __typename?: 'Trainer';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  party?: Maybe<Array<Maybe<Pokemon>>>;
};

/** Pokemon type (i.e. Grass, Electric, Water, etc) */
export type Type = {
  __typename?: 'Type';
  /** array of super effective Types that the queried type receives double damage from */
  double_damage_from?: Maybe<Array<Maybe<Type>>>;
  /** array of Types the queried type inflicts double damage upon */
  double_damage_to?: Maybe<Array<Maybe<Type>>>;
  /** array of not very effective Types the queried type receives half damage from */
  half_damage_from?: Maybe<Array<Maybe<Type>>>;
  /** array of Types the queried type inflicts double damage upon */
  half_damage_to?: Maybe<Array<Maybe<Type>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** array of ineffective Types the queried type receives no damage from */
  no_damage_from?: Maybe<Array<Maybe<Type>>>;
  /** array of Types the queried type inflicts no damage upon */
  no_damage_to?: Maybe<Array<Maybe<Type>>>;
  /** array of Pokemon that have the queried Type */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
};

export type PokemonBannerFragment = { __typename?: 'Pokemon', id: number, name?: string | null, nat_dex_num?: number | null, types?: Array<{ __typename?: 'Type', id: number, name?: string | null } | null> | null } & { ' $fragmentName'?: 'PokemonBannerFragment' };

export type AddToPartyMutationVariables = Exact<{
  trainerId: Scalars['Int']['input'];
  pokemonId: Scalars['Int']['input'];
}>;


export type AddToPartyMutation = { __typename?: 'Mutation', addPokemonToParty?: { __typename?: 'Pokemon', id: number } | null };

export type NewPokemonFragment = { __typename?: 'Pokemon', id: number } & { ' $fragmentName'?: 'NewPokemonFragment' };

export type DeleteFromPartyMutationVariables = Exact<{
  trainerId: Scalars['Int']['input'];
  pokemonId: Scalars['Int']['input'];
}>;


export type DeleteFromPartyMutation = { __typename?: 'Mutation', removePokemonFromParty?: { __typename?: 'Pokemon', id: number } | null };

export type GetPartyQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPartyQuery = { __typename?: 'Query', trainer?: { __typename?: 'Trainer', id: number, name?: string | null, party?: Array<{ __typename?: 'Pokemon', id: number } | null> | null } | null };

export type GetSinglePokemonQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetSinglePokemonQuery = { __typename?: 'Query', pokemon?: (
    { __typename?: 'Pokemon', id: number, name?: string | null, dominant_color?: { __typename?: 'Dominant_Color', light?: string | null, dark?: string | null, original?: string | null } | null }
    & { ' $fragmentRefs'?: { 'PokemonBannerFragment': PokemonBannerFragment } }
  ) | null };

export type GetPokemonListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetPokemonListQuery = { __typename?: 'Query', allPokemon?: Array<{ __typename?: 'Pokemon', id: number, name?: string | null, nat_dex_num?: number | null, types?: Array<{ __typename?: 'Type', id: number, name?: string | null } | null> | null, dominant_color?: { __typename?: 'Dominant_Color', light?: string | null, dark?: string | null, original?: string | null } | null } | null> | null };

export type GetTrainerQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTrainerQuery = { __typename?: 'Query', trainer?: { __typename?: 'Trainer', id: number, name?: string | null, party?: Array<{ __typename?: 'Pokemon', id: number, name?: string | null } | null> | null } | null };

export type EditTrainerNameMutationVariables = Exact<{
  trainerId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type EditTrainerNameMutation = { __typename?: 'Mutation', editTrainerName?: { __typename?: 'Trainer', id: number, name?: string | null } | null };

export const PokemonBannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PokemonBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nat_dex_num"}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PokemonBannerFragment, unknown>;
export const NewPokemonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewPokemon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewPokemonFragment, unknown>;
export const AddToPartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPokemonToParty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"trainerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pokemonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddToPartyMutation, AddToPartyMutationVariables>;
export const DeleteFromPartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFromParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePokemonFromParty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"trainerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pokemonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteFromPartyMutation, DeleteFromPartyMutationVariables>;
export const GetPartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPartyQuery, GetPartyQueryVariables>;
export const GetSinglePokemonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSinglePokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PokemonBanner"}},{"kind":"Field","name":{"kind":"Name","value":"dominant_color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"}},{"kind":"Field","name":{"kind":"Name","value":"dark"}},{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PokemonBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nat_dex_num"}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSinglePokemonQuery, GetSinglePokemonQueryVariables>;
export const GetPokemonListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemonList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nat_dex_num"}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dominant_color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"}},{"kind":"Field","name":{"kind":"Name","value":"dark"}},{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}}]}}]} as unknown as DocumentNode<GetPokemonListQuery, GetPokemonListQueryVariables>;
export const GetTrainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrainerQuery, GetTrainerQueryVariables>;
export const EditTrainerNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editTrainerName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTrainerName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"trainerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trainerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditTrainerNameMutation, EditTrainerNameMutationVariables>;