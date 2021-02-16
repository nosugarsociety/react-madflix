import React from 'react';
import styled from "styled-components/macro";
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import { GlobalStyle, theme } from './styles/index';

const IndexBar = styled.div`
  width: 70px;
  height: 100vh;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;

  span {
    position: absolute;
    left: 0;
    top: 5%;
    transform: rotate(-90deg) translate(5%,0);
    z-index: 1;    
  }
`;

const Wrapper = styled.div`
  margin-left: 100px;
  background-color: black;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>      
      <GlobalStyle />
      <IndexBar><span>MADFLIX</span></IndexBar>
      <Wrapper>
        <AppRouter />    
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
