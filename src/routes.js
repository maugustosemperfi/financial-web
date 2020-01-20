import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0dca78',
      contrastText: '#fff'
    },
  },
});

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
