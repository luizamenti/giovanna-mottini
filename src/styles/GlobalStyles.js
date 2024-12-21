import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ClearSans';
    src: url('fonts/ClearSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ClearSans';
    src: url('fonts/ClearSans-Bold.ttf') format('truetype');
    font-weight: 600;
    font-style: bold;
  }

  @font-face {
    font-family: 'TenorSans';
    src: url('fonts/TenorSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Buster';
    src: url('fonts/Buster.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Biryani';
    src: url('fonts/Biryani-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none !important;
  }

  body {
    font-family: 'ClearSans', sans-serif;
  }

  p {
    margin-bottom: 0;
  }
`;

export default GlobalStyles;
