import styled from "styled-components";

export const Container = styled.div`
  background-color: #050d18;
  padding: 2rem 5rem;

  * {
    font-family: "ClearSans", sans-serif;
    color: white;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 5px;
`;

export const Title = styled.p`
  width: 100%;
  letter-spacing: 6px;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-family: "TenorSans", sans-serif;
  width: 100%;
  letter-spacing: 9px;
  word-spacing: 5px;
  text-align: center;
  font-size: 18px;
`;

// export const NameBox = styled.div`
//   background-image: url("img/sky-background.png");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

// export const NameLine = styled.h1`
//   font-family: "Buster", "sans-serif";
//   font-size: 50px;
//   margin: 2px -5px -12px -3px;
// `;

export const Logo = styled.img`
  width: 400px;
  margin-right: 15px;
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
  grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
  margin: 4rem 3rem;
`;
