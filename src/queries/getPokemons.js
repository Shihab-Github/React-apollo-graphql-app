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
  query getAllPokemonSpecies {
    getAllPokemonSpecies(offset: 0, take: 1)
  }
`;
