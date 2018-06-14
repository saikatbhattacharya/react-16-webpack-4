import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Admin = Loadable({
  loader: () => import('./admin-container'),
  loading: Loading,
});

const AppComponent = Loadable({
  loader: () => import('./app-container'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AppComponent}/>
      <Route path="/admin" component={Admin}/>
    </Switch>
  </Router>
);


export default App;