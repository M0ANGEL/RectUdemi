import React from "react";
import { Route, Routes } from "react-router";

const Pokedes = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonProfile"));
const PokemonByType = React.lazy(() => import("../views/PokemonType"));
const FavoritePokemon = React.lazy(() => import("../views/PokemonByFavorite"));

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
    <Route
      path="/type/:typeName"
      element={
        <React.Suspense fallback={<div>Cargando...</div>}>
          <PokemonByType />
        </React.Suspense>
      }
    />
    <Route
      path="/favorite"
      element={
        <React.Suspense fallback={<div>Cargando...</div>}>
          <FavoritePokemon />
        </React.Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
