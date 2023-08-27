import React from "react";
import { usePokemonDetail } from "../api/usePokemonDetail";

interface PokemonCardProps {
  url: string;
  name: string;
}

export const PokemonCard = ({ url, name }: PokemonCardProps) => {
  const { data, isLoading, error } = usePokemonDetail(url);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Height: {data?.height}</div>
      <div>Weight: {data?.weight}</div>
    </div>
  );
};
