import React from "react";
import { Route, Routes } from "react-router";

const Pokedes = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonProfile"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Cargando...</div>}>
          <Pokedes />
        </React.Suspense>
      }
    />
    <Route
      path="/pokemon/:pokemonName"
      element={
        <React.Suspense fallback={<div>Cargando...</div>}>
          <PokemonProfile />
        </React.Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
