import React from "react";
import { createTheme, createStyles, Theme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import tokenObj from '../navi/tokens/build/json/tokens.json'

const theme = createTheme({
  palette: {
    primary: {
      main: tokenObj['color-primary-400'],
    },
    secondary: {
      main: tokenObj['color-secondary-800'],
    },
    success: {
      main: tokenObj['color-success-400'],
    },
    info: {
      main: tokenObj['color-info-400'],
    },
    warning: {
      main: tokenObj['color-warning-300'],
    },
    error: {
      main: tokenObj['color-critical-400'],
    },
  },
});


export default () => {
  return <ThemeProvider theme={theme}>
    <div>
      <Button color="primary" variant="contained" >Test</Button>
      <Button color="secondary" variant="contained" >Test</Button>

    </div>
    <div>
      <Button color="primary" variant="outlined" >Test</Button>
      <Button color="secondary" variant="outlined" >Test</Button>
    </div>
    <div>
      <Button color="primary" variant="text" >Test</Button>
      <Button color="secondary" variant="text" >Test</Button>
    </div>
  </ThemeProvider>
}