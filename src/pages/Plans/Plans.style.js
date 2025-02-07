import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
  padding: 2rem 1rem;
  gap: 2rem;

  @media (min-width: 600px) {
    padding: 4rem 5rem;
  }

  @media (min-width: 1200px) {
    padding: 4rem 15rem;
  }

  * {
    font-family: "TenorSans", sans-serif;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  line-height: normal;
  font-size: ${({ size }) => (size ? size : "")};
  color: ${({ color }) => (color === "purple" ? "#5f36af" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "")};
  border: ${({ border }) => (border ? border : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export const PlanBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  max-width: 600px;
`;

export const ArrowImg = styled.img`
  width: 100px;
`;

export const PlanTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PlanTitle = styled.p`
  max-width: 200px;
  line-height: normal;
  font-size: 50px;
  color: #5f36af;
`;
