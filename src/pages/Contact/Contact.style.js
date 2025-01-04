import styled from "styled-components";

export const Container = styled.div`
  background-color: #c2b59b;
  padding: 3rem 2rem;

  @media (min-width: 800px) {
    padding: 3rem 10rem;
  }
`;

export const OuterBox = styled.div`
  display: grid;
  align-items: center;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

export const FirstColumn = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: "TenorSans", sans-serif;
  font-size: 60px;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin: 10px 0 20px 0;
  text-align: center;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;

export const Input = styled.input`
  border: ${({ border }) => (border ? "1px red solid" : "none")};
  background-color: #f0ebe1;
  border-radius: 30px;
  margin-top: 5px;
  outline: none;
  color: grey;
  width: 80vw;
  max-width: 500px;
  padding: 20px;
  height: 40px;
  font-family: "ClearSans", sans-serif;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 5px 0 0 20px;
`;

export const TextArea = styled.textarea`
  border: none;
  background-color: #f0ebe1;
  border-radius: 30px;
  margin: 5px 0 20px 0;
  outline: none;
  color: grey;
  width: 80vw;
  max-width: 500px;
  padding: 20px;
  height: 150px;
  font-family: "ClearSans", sans-serif;
  resize: none;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 2rem;

  @media (min-width: 800px) {
    margin-top: 6rem;
  }
`;
