import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const PokemonList: React.FC = () => {
  const { data, error } = useSWR<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=20', fetcher);

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.results.map((pokemon: { name: string }) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
