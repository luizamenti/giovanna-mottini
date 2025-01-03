import styled from "styled-components";

export const Container = styled.div`
  background-color: #050d18;
  color: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "TenorSans", sans-serif;
    font-weight: normal;
  }
`;

export const Content = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 30px;
  margin-top: 0.2rem;
  text-align: center;
  width: 100%;
`;

export const Text = styled.p`
  padding: 2rem 3rem 0rem 3rem;
  font-size: ${({ size }) => (size ? size : "18px")};
  color: ${({ color }) => (color === "purple" ? "#8c52ff" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "")};

  @media (min-width: 800px) {
    padding: 2rem 5rem 0rem 5rem;
  }

  @media (min-width: 1000px) {
    padding: 3rem 13rem 0rem 13rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${({ size }) => (size ? size : "24px")};
  color: ${({ color }) => (color === "purple" ? "#8c52ff" : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  text-align: center;
`;

export const Box = styled.span`
  margin: 0rem;
  background-color: ${({ darkPurple }) => (darkPurple ? "#5f36af" : "#8c52ff")};
  border-radius: 45px;
  display: flex;
  width: 90%;
  min-height: 208px;
  margin-top: 3px;
  padding: 5px;

  @media (min-width: 800px) {
    width: 65%;
  }
`;

export const VerticalTextBox = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalText = styled.h3`
  transform: rotate(-90deg);
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  height: fit-content;
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;

  li {
    margin-top: 0.2rem;
    font-size: 17px;
  }

  b {
    font-weight: bold;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 2.5rem;
`;
