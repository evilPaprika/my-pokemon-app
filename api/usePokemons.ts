import { useState } from "react";
import { fetcher } from "./fetcher";
import useSWR from "swr";
import { PokemonListResponse } from "../interfaces/index";

export const usePokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  const { data, error } = useSWR<PokemonListResponse, unknown>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`,
    fetcher
  );

  const totalPages = data ? Math.ceil(data.count / itemsPerPage) : 0;

  return {
    data,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
