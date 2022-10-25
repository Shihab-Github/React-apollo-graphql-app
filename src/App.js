import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAILS, GET_ALL_POKEMONS } from "./queries/getPokemons";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_POKEMONS);
  // const { data, loading, error } = useQuery(GET_POKEMON_DETAILS);

  console.log("data: ", data);

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

export default App;
