import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { PokemonListItem } from "../../interface/PokemonLisItem";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import Label from "../shared/Label/Label";
import { PrimeraMayucula } from "../../utils/textoMayucula";

interface PokemonCardPorps {
  pokemon?: PokemonListItem;
  pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardPorps> = ({
  pokemon,
  pokemonId,
}) => {
  const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
  const mianType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );
  return (
    <div
      className={`${mianType}-background  w-56 h-56 rounded-lg shadow-lg p-4`}
    >
      <div className="fles flex-col items-center mx-auto">
        <Label>
          {pokemonData?.name ? PrimeraMayucula(pokemonData?.name) : ""}
        </Label>
        <img
          className="mx-auto w-40 h-40"
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData?.name ?? ""}
        />
      </div>
    </div>
  );
};
