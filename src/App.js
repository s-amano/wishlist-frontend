import React from 'react';

import './App.css';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import Navbar from './components/Navbar';
import ApiFetch from './components/ApiFetch'

const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: {
        main: '#f44336'
      },
    },
    typography: {
      fontFamily:'Comic Neue',
    }
})


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <ApiFetch />
    </MuiThemeProvider>
  );

}

export default App;
