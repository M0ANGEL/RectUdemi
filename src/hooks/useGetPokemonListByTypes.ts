import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/url";
import { PokemonListItem } from "../interface/PokemonLisItem";

interface Pokemon {
  pokemon: PokemonListItem;
}

interface TypeListInfo {
  pokemon: Pokemon[];
}

const useGetPokemonListbyType = (typeName: string) => {
  const { data, isLoading, error } = useQuery<TypeListInfo>({
    queryKey: ["pokemonListByType", typeName],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}type/${typeName}`);
      if (!response.ok) {
        throw new Error("error de servidor");
      }
      return response.json();
    },
  });

  return {
    pokemonList: data?.pokemon ?? [],
    isLoading,
    error: error?.message ?? undefined,
  };
};

export default useGetPokemonListbyType;
