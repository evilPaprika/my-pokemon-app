import styled from "styled-components";
import { usePokemons } from "../api/usePokemons";
import { PokemonCard } from "./PokemonCard";

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageCount = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const PokemonList = () => {
  const { data, error, currentPage, totalPages, setCurrentPage } =
    usePokemons();

  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <PokemonListContainer>
        {data.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </PokemonListContainer>
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
      <PageCount>
        Page {currentPage} of {totalPages}
      </PageCount>
    </div>
  );
};

export default PokemonList;
