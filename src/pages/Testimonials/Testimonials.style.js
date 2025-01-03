import styled from "styled-components";

export const Container = styled.div`
  background-color: #050d18;
  color: white;
  display: grid;
  padding: 3rem 1rem 2rem 1rem;

  h1 {
    font-family: "TenorSans", sans-serif;
    font-weight: normal;
    font-size: 50px;
  }

  @media (min-width: 1200px) {
    padding: 5rem 10rem 5rem 10rem;
    grid-template-columns: 1fr 1fr;

    h1 {
      font-size: 60px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 67px;

  @media (min-width: 120px) {
    padding-right: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-left: 3rem;
`;

export const StartsImg = styled.img`
  max-width: 300px;

  @media (min-width: 1200px) {
    max-width: 365px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 4rem;

  @media (min-width: 1200px) {
    padding-top: 0;
  }
`;
