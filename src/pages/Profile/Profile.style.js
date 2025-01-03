import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
  padding: 2rem 2rem;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 60px;
  }

  @media (min-width: 1200px) {
    padding: 4rem 5rem 5rem 5rem;
  }

  @media (min-width: 1400px) {
    padding: 4rem 8rem 5rem 10rem;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 50% 50% 0 0;
  width: 100%;
  max-width: 450px;
  align-self: end;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 60px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    align-items: unset;
  }
`;

export const Title = styled.img`
  width: 90%;
  max-width: 450px;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 95%;
`;
