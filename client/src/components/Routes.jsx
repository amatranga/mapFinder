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

import Country from './user/Country';
import Home from './page/Home';
import Redirected from './functions/Redirected';
import PrivateRoute from './functions/PrivateRoute';
import MyMap from './user/MyMap';
import Achievements from './user/Achievements';
import Statistics from './user/Statistics';
import Settings from './user/Settings';

const Routes = () => (
  <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/country" component = {Country} />
        <PrivateRoute path="/home" component={Home} />
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
