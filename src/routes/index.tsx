import React from "react";
import { Route, Routes } from "react-router";

const Pokedes = React.lazy(() => import("../views/Pokedex"));

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
  </Routes>
);

export default AppRoutes;
