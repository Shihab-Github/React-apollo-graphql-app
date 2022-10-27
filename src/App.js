import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./features/Pokemon/List";

const PokemonDetails = lazy(() => import('./features/Pokemon/Detail'))

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/detail/:species" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
