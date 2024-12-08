import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../constants/url";
import { PokemonListItem } from "../interface/PokemonLisItem";

interface PokemonList{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export const useGetPokemonList = () =>{
    const [url, setUrl] = useState(`${BASE_URL}pokemon?limit=36`);

    const {data, isLoading, error} = useQuery<PokemonList>({
        queryKey:['pokemonList',url],
        queryFn: async () =>{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('error de counsulta a la api');
            }
            return response.json();
        }
    });

    const goTonextPage = () =>{
        if(data?.next){
            setUrl(data.next);
        }
    }

    const goToPreviousPage = () =>{
        if(data?.previous){
            setUrl(data.previous);
        }
    }

    return{
        pokemonList: data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        goTonextPage: data?.next ? goTonextPage : undefined,
        goToPreviousPage: data?.previous ? goToPreviousPage : undefined
    }
}