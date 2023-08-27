import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const PokemonList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const offset = (currentPage - 1) * itemsPerPage;
  
    const { data, error } = useSWR<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`, fetcher);
  
    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;
  
    const totalPages = Math.ceil(data.count / itemsPerPage);
  
    return (
      <div>
        {data.results.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
        <div>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
        <div>Page {currentPage} of {totalPages}</div>
      </div>
    );
  };
  
  export default PokemonList;
