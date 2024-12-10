import React from "react";
import { Link } from "react-router-dom";
import pokeBall from "../../assets/iconosTipos/pokeball.png";

export const NavigationBar: React.FC = () => (
  <nav className="mx-auto bg-yellow-400 flex justify-between h-12 items-center shadow-lg">
    <div className="mx-auto flex justify-between items-center w-9/12">
      <Link to="/">
        <img src={pokeBall} alt="poke logo" className="w-10 h-10" />
      </Link>
      <div className="flex gap-5 items-center ">
        <Link className="text-black hover:text-white" to="/">
          <b>Inicio</b>
        </Link>
        <Link to="/favorite">
          <b>Favoritos</b>
        </Link>
      </div>
    </div>
  </nav>
);
