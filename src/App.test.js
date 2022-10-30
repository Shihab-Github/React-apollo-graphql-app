import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_ALL_POKEMONS } from "./queries/getPokemons";
import { BrowserRouter as Router } from "react-router-dom";
import PokemonList from "./features/Pokemon/List";

// import App from './App';

const pokemonListMock = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: {
        offset: 0,
        take: 10,
      },
    },
    result: {
      data: {
        getAllPokemonSpecies: [
          "Syclar",
          "Syclant",
          "Revenankh",
          "Embirch",
          "Flarelm",
          "Pyroak",
          "Breezi",
          "Fidgit",
          "Rebble",
          "Tactite",
        ],
      },
    },
  },
];

it("should render pokemons", async () => {
  render(
    <MockedProvider mocks={pokemonListMock} addTypename={false}>
      <Router>
        <PokemonList />
      </Router>
    </MockedProvider>
  );
  expect(await screen.findByText("Pokemons")).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
