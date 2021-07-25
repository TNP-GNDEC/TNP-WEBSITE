import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import App from "./App";

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#e9f3fd',
        main: '#1687d9',
        dark: '#303030',
        text: '#606060',
        accent: '#D8DEE7'
      },
      secondary: {
        light: '#038ed433',
        main: '#ffffff',
        dark: '#969696',
        accent: '#e5e5e5',
        text: '#000000bf',
        hover: '#ccd6e7'
      },
    },
  });

function Example() {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    }

export default Example;

if (document.getElementById('example')) {
    
    ReactDOM.render(<Example />, document.getElementById('example'));
}
