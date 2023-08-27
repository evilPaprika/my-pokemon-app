import styled from 'styled-components';
import {usePokemons} from '../api/usePokemons';


const PokemonList = () => {
    const { data, error, currentPage, totalPages, setCurrentPage } = usePokemons();

    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;
  
  
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
