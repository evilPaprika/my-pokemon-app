import useSWR from "swr";
import { fetcher } from "./fetcher";
import { Pokemon } from "../interfaces/index";

export const usePokemonDetail = (url: string) => {
  const { data, error, isLoading } = useSWR<Pokemon, unknown>(url, fetcher);

  return {
    data,
    isLoading,
    error,
  };
};
