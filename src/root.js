import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core';
import { AuthProvider } from './contexts';
import App from './App';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <GlobalStyle />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  #root {
    display:flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body {
    background-color: #f5f5f5;
  }
`;

export default Root;
