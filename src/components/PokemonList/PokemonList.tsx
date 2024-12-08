import React from "react";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, goTonextPage, goToPreviousPage } = useGetPokemonList();
  return (
    <Grid goToNextPage={goTonextPage} goToPreviousPage={goToPreviousPage}>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonList;
