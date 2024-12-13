import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;

  p,
  h2 {
    font-family: "TenorSans", sans-serif;
  }
`;

export const Sparkle = styled.img`
  width: 100px;
`;

export const PreTitleBox = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ size }) => (size ? size : "")};
  color: ${({ color }) => (color === "purple" ? "#5f36af" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;
