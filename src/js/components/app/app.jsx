import React from 'react';
import Main from '../main/main.jsx';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history/history';
import {AppRoute} from '../../utils/const.js';

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`}>
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
