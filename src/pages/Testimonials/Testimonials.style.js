import styled from "styled-components";

export const Container = styled.div`
  background-color: #050d18;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10rem 10rem 5rem 10rem;

  h1 {
    font-family: "TenorSans", sans-serif;
    font-weight: normal;
    font-size: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 67px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StartsImg = styled.img`
  max-width: 365px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
