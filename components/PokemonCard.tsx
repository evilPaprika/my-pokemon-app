import React from "react";
import { usePokemonDetail } from "../api/usePokemonDetail";
import styled from "styled-components";
import { Pokemon } from "../interfaces/index";

interface PokemonCardProps {
  url: string;
  name: string;
}

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 400px;
`;

const ImageContainer = styled.div`
  margin-right: 10px;
`;

const Image = styled.img`
  height: 170px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Stat = styled.div`
  margin-bottom: 5px;
`;

export const PokemonCard = ({ url, name }: PokemonCardProps) => {
  const { data, isLoading, error } = usePokemonDetail(url);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={data?.sprites.front_default} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Stat>Height: {data?.height}</Stat>
        <Stat>Weight: {data?.weight}</Stat>
        <Stat>Base Experience: {data?.base_experience}</Stat>
        <Stat>
          Abilities:{" "}
          {data?.abilities.map((ability) => ability.ability.name).join(", ")}
        </Stat>
        <Stat>Forms: {data?.forms.map((form) => form.name).join(", ")}</Stat>
        <Stat>
          Types: {data?.types.map((type) => type.type.name).join(", ")}
        </Stat>
      </InfoContainer>
    </CardContainer>
  );
};
