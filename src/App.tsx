import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="/:userUrl?" component={SearchPage} />
    </Switch>
  );
}

export default App;
