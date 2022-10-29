import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_BY_SPECIES } from "../../../queries/getPokemons";

export default function PokemonDetails() {
  const params = useParams();

  const { data } = useQuery(GET_POKEMON_BY_SPECIES, {
    variables: {
      // pokemon: "mewtwo",
      pokemon: params.species.toLowerCase(),
    },
  });

  console.log("params: ", params);

  return <div>PokemonDetails</div>;
}
