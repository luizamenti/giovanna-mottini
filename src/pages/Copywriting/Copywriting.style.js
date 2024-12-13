import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
`;

export const CopywritingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "")};

  p,
  li {
    font-family: "TenorSans", sans-serif;
  }

  li {
    margin-top: 0.2rem;
  }
`;

export const Sparkle = styled.img`
  width: 100px;
`;

export const PreTitleBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ size }) => (size ? size : "")};
  color: ${({ color }) => (color === "purple" ? "#5f36af" : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "")};
`;

export const Paragraph = styled.div`
  align-self: flex-start;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "")};
`;

export const ShowPhoto = styled.img`
  width: 100vw;
  margin-top: 2rem;
`;

export const ImgAndText = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

export const MouthImage = styled.img`
  width: 350px;
  align-self: flex-start;
`;

export const ParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
