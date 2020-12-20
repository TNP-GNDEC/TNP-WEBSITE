import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './Theme'
import Footer from "./Footer";
import Cards from './PostCards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppBar from "./Navbar"
import App from "./App";

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#193b681a',
        main: '#038ed4',
        dark: '#193b68',
        contrastText: '#fff',
      },
      secondary: {
        light: '#038ed41a',
        main: '#ffffff',
        dark: '#969696',
        contrastText: '#000000bf',
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
