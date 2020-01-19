import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';

const defaultTheme = getTokens({
  palette: {
    product: {
      normal: '#0dca78',
    },
  },
});

export default function Routes() {
  return (
    <ThemeProvider theme={{ orbit: defaultTheme }}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
