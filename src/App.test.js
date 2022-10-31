import { render, screen, getByText } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_ALL_POKEMONS, GET_POKEMON_BY_SPECIES } from "./queries/getPokemons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
} from "react-router-dom";

import PokemonList from "./features/Pokemon/List";
import PokemonDetails from "./features/Pokemon/Detail";

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

const pokemonDetailMock = [
  {
    request: {
      query: GET_POKEMON_BY_SPECIES,
      variables: {
        pokemon: "breezi",
      },
    },
    result: {
      data: {
        getPokemon: {
          baseStats: {
            hp: 50,
            attack: 46,
            defense: 69,
            specialattack: 60,
            specialdefense: 50,
            speed: 75,
          },
          bulbapediaPage: "",
          flavorTexts: [],
          gender: {
            male: "50%",
            female: "50%",
          },
          levellingRate: null,
          species: "breezi",
          types: ["Poison", "Flying"],
        },
      },
    },
  },
];

it("should render pokemon list", async () => {
  render(
    <MockedProvider mocks={pokemonListMock} addTypename={false}>
      <Router>
        <PokemonList />
      </Router>
    </MockedProvider>
  );
  expect(await screen.findByText("Pokemons")).toBeInTheDocument();
  expect(await screen.findByText("Syclar")).toBeInTheDocument();
});

it("should render pokemon detail", async () => {
  const route = "/detail/Breezi";
  render(
    <MockedProvider mocks={pokemonDetailMock} addTypename={false}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/detail/:species" element={<PokemonDetails />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );

  expect(await screen.findByText("Breezi")).toBeInTheDocument();
});
