import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Redirected from './Redirected';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import MyMap from './MyMap';
import Achievements from './Achievements';
import Statistics from './Statistics';
import Settings from './Settings';

const Routes = () => (
  <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/myMap" component={MyMap} />
        <PrivateRoute path="/achievements" component={Achievements} />
        <PrivateRoute path="/statistics" component={Statistics} />
        <PrivateRoute path="/settings" component={Settings} />
        <Route render={ () => <h1>404 Page Not Found</h1>} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
