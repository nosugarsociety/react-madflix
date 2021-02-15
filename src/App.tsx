import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import { GlobalStyle, theme } from './styles/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>      
      <GlobalStyle />
      <AppRouter />    
    </ThemeProvider>
  );
}

export default App;
