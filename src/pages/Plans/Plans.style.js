import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
`;

export const CopywritingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ smallerPadding }) =>
    smallerPadding ? "2rem 2rem" : "2rem 2rem"};

  @media (min-width: 1200px) {
    padding: ${({ smallerPadding }) =>
      smallerPadding ? "2rem 10rem" : "2rem 20rem"};
  }
  p,
  li {
    font-family: "TenorSans", sans-serif;
  }

  li {
    margin-top: 0.2rem;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: "TenorSans", sans-serif;
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
  display: flex;
`;

// export const PlanBox = styled.div`
// display: flex;
// `;
