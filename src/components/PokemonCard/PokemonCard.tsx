import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { PokemonListItem } from "../../interface/PokemonLisItem";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import Label from "../shared/Label/Label";
import { PrimeraMayucula } from "../../utils/textoMayucula";
import { FavoriteButton } from "../shared/Button/FavoriteButton";
import { useNavigate } from "react-router";
import { TypesIcons } from "../shared/TypeIcon/TypesIcons";
import { useBusquedaSotre } from "../../store/useBusquedaSotre";

interface PokemonCardPorps {
  pokemon?: PokemonListItem;
  pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardPorps> = ({
  pokemon,
  pokemonId,
}) => {
  const closeModal = useBusquedaSotre((state) => state.closeModal);
  const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
  const mianType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );
  const navigate = useNavigate();

  const onClickInfor = () => {
    navigate(`/pokemon/${pokemonData?.name}`);
    closeModal();
  };
  return (
    <div
      className={`${mianType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}
    >
      <FavoriteButton pokemonId={pokemonData?.id ?? 0} />
      <TypesIcons types={pokemonData?.types ?? []} />
      <div
        className="fles flex-col items-center mx-auto"
        onClick={onClickInfor}
      >
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
