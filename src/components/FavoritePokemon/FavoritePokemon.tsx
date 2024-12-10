import React from "react";
import { usefavoriteStore } from "../../store/useFavoriteStore";
import { Grid } from "../shared/Grid/Grid";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const FavoritePokemon = () => {
  const favoriteIds = usefavoriteStore((state) => state.favorites);
  return (
    <Grid>
      {favoriteIds.map((favoriteIds) => (
        <PokemonCard key={favoriteIds} pokemonId={Number(favoriteIds)} />
      ))}
    </Grid>
  );
};
