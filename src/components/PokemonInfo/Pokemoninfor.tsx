import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { useParams } from "react-router";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { PrimeraMayucula } from "../../utils/textoMayucula";

export const Pokemoninfo = () => {
  const { pokemonName } = useParams();
  const { pokemonData } = useGetPokemon(pokemonName);
  const mainType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );

  return (
    <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
      <div
        className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}
      >
        <img
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData?.name ?? ""}
          className="mx-auto w-72 h-72"
        />
      </div>
      <div className="flex flex-col grow p-5 gap-3">
        <h1 className="text-3xl">
          {PrimeraMayucula(pokemonData?.name ?? "")}{" "}
        </h1>
        <span>{`Peso: ${pokemonData?.weight ?? 0} kg`} </span>
        <span>{`Altura: ${pokemonData?.height ?? 0} cm`} </span>
      </div>
    </div>
  );
};
