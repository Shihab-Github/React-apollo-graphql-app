import { gql } from "graphql-tag";
import { PokemonEnum } from "./pokemon.graphql";

export const GET_ALL_POKEMONS = gql`
  query getAllPokemonSpecies($offset: Int, $take: Int) {
    getAllPokemonSpecies(offset: $offset, take: $take)
  }
`;

export const GET_POKEMON_BY_SPECIES = gql`
  query getPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      species
      types
      baseStats {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
      gender {
        male
        female
      }
      flavorTexts {
        game
        flavor
      }
      levellingRate
      bulbapediaPage
    }
  }
`;
