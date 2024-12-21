import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
  padding: 5rem 8rem 5rem 10rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 60px;
`;

export const Img = styled.img`
  border-radius: 50% 50% 0 0;
  width: 100%;
  align-self: end;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.img`
  width: 90%;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 95%;
`;
