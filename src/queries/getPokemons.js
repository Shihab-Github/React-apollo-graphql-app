import { gql } from "graphql-tag";

export const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: dragonite) {
      sprite
      num
      species
      color
    }
  }
`;

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies($offset: Int, $take: Int) {
    getAllPokemonSpecies(offset: $offset, take: $take)
  }
`;
