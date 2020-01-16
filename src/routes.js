import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-dom';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}
