import styled, { createGlobalStyle, DefaultTheme } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }
  #root {
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const theme: DefaultTheme = {
  paddings: {
    containerTop: "80px",
    side: "20px"
  },
  colors: {
    main: "#fff",
    secondary: "#52575d",
    highlight: "#fddb3a"
  }
}

export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1480px;
  padding-left: 20px;
  padding-top: ${(props) => props.theme.paddings.containerTop};
  background-color: ${(props) => props.theme.colors.main};
`; 
