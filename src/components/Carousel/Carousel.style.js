import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin-top: 2rem;
  height: 150px;

  @media (min-width: 630px) {
    height: 200px;
  }

  @media (min-width: 800px) {
    height: 250px;
  }

  @media (min-width: 920px) {
    height: 300px;
  }
`;

export const LeftArrow = styled.img`
  width: 80%;
  min-width: 50px;
  max-width: 60px;
  margin-right: 15rem;
`;

export const RightArrow = styled.img`
  width: 80%;
  min-width: 50px;
  max-width: 60px;
  margin-left: 15rem;
`;
