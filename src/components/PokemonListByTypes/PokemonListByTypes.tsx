import React from "react";
import { useParams } from "react-router";
import useGetPokemonListbyType from "../../hooks/useGetPokemonListByTypes";
import { Grid } from "../shared/Grid/Grid";
import { PokemonCard } from "../PokemonCard/PokemonCard";

const PokemonLis = () => {
  const { typeName } = useParams();
  const { pokemonList } = useGetPokemonListbyType(typeName ?? "");
  return (
    <Grid>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonLis;
