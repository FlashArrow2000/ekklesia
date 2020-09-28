import React from 'react';
import ReactDOM from 'react-dom';
import { Ekklesia } from './Ekklesia';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fed136",
      dark: "#343a40",
      light: "#FFFFFF"
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>

    <Ekklesia />

  </ThemeProvider>,
  document.getElementById('root')
);

