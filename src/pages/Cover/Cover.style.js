import styled from "styled-components";

export const Container = styled.div`
  background-color: #050d18;
  padding: 2rem 5%;

  @media (min-width: 1400px) {
    padding: 2rem 10rem;
  }

  * {
    font-family: "ClearSans", sans-serif;
    color: white;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 5px;
`;

export const Logo = styled.img`
  width: 40vw;
  max-width: 260px;
`;

export const Moto = styled.p`
  font-family: "TenorSans", sans-serif;
  font-size: 0.7rem;
  text-align: center;

  @media (min-width: 800px) {
    letter-spacing: 3px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-family: "TenorSans", sans-serif;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 20px;
  margin-top: 3rem;
`;

export const Subtitle = styled.p`
  font-family: "TenorSans", sans-serif;
  font-size: 14px;
  margin-top: 10px;
  letter-spacing: 3px;
`;

export const ButtonSet = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 50px;
`;

export const GhostButton = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

export const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const ContentSection = styled.section`
  display: grid;
  grid-auto-rows: auto;
  margin: 3rem 3rem;
  gap: 30px;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
  }
`;
