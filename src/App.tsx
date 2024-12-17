import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import ModeloBusqueda from "./components/ModuloBusqueda/ModeloBusqueda";

const App: React.FC = () => {
  return (
    <Providers>
      <NavigationBar />
      <div className="mt-5 mb-5 w-9/12 mx-auto">
        <AppRoutes />
      </div>
      <ModeloBusqueda />
    </Providers>
  );
};

export default App;
