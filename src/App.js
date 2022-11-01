import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./features/Pokemon/List";
import PokemonAppBar from "./UI/Appbar";

const PokemonDetails = lazy(() => import("./features/Pokemon/Detail"));
const WatchList = lazy(() => import("./features/Pokemon/WatchList"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <PokemonAppBar />
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/favorites" element={<WatchList />} />
            <Route path="/detail/:species" element={<PokemonDetails />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
