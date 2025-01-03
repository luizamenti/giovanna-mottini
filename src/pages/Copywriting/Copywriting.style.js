import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0ebe1;
`;

export const CopywritingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ smallerPadding }) =>
    smallerPadding ? "2rem 2rem" : "2rem 4rem"};

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

export const Sparkle = styled.img`
  width: 100px;
`;

export const PreTitleBox = styled.div`
  display: flex;
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
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 250px;
`;

export const MouthImage = styled.img`
  width: 40vw;
  max-width: 250px;
  align-self: center;
`;

export const ParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListParagraph = styled.div`
  padding: 0 2rem;

  @media (min-width: 800px) {
    margin-left: 5rem;
  }
`;
