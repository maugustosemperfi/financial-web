import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import { ThemeProvider } from '@material-ui/styles';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0dca78',
      contrastText: '#fff'
    },
  },
});

const defaultTheme = getTokens({
  palette: {
    product: {
      normal: '#0dca78',
    },
  },
});

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
