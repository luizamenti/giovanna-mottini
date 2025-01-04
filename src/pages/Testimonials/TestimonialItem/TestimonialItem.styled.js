import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 10px;
`;

export const Img = styled.img`
  width: 90px;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
`;

export const Name = styled.p`
  font-family: "TenorSans", sans-serif;
  font-size: 30px;
  text-decoration: underline !important;
`;

export const Text = styled.p`
  font-family: "Biryani", sans-serif;
  max-width: 350px;
`;
