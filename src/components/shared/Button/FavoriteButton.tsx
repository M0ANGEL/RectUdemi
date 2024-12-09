import React, { useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { usefavoriteStore } from "../../../store/useFavoriteStore";

interface FavoriteButtonPorps {
  pokemonId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonPorps> = ({
  pokemonId,
}) => {
  const [favorites, addFavorite, deleteFavorite] = usefavoriteStore((state) => [
    state.favorites,
    state.addFavorite,
    state.deleteFavorite,
  ]);

  const isFavorite = useMemo(
    () => favorites.includes(pokemonId.toString()),
    [favorites, pokemonId]
  );

  const onClikFavorito = () => {
    const idToModify = pokemonId.toString();
    isFavorite ? deleteFavorite(idToModify) : addFavorite(idToModify);
  };
  return (
    <button
      className="bg-white p-1 rounded-full absolute top-2 right-2  mt-44"
      onClick={onClikFavorito}
    >
      {isFavorite ? <FaHeart fill="#EF4444" /> : <FaRegHeart fill="#EF4444" />}
    </button>
  );
};
