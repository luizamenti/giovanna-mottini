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
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 40px;
  margin-top: 0.2rem;
`;

export const Text = styled.p`
  padding: 0 15rem;
  font-size: ${({ size }) => (size ? size : "18px")};
  color: ${({ color }) => (color === "purple" ? "#8c52ff" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "")};
`;

export const Subtitle = styled.h2`
  font-size: ${({ size }) => (size ? size : "24px")};
  color: ${({ color }) => (color === "purple" ? "#8c52ff" : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
`;

export const Box = styled.span`
  margin: 0 10rem;
  background-color: ${({ darkPurple }) => (darkPurple ? "#5f36af" : "#8c52ff")};
  border-radius: 45px;
  display: flex;
  width: 65%;
  height: 208px;
  margin-top: 3px;
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
