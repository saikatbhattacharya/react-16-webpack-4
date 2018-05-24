import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Admin = Loadable({
  loader: () => import('./admin-container'),
  loading: Loading,
});

// const About = Loadable({
//   loader: () => import('./routes/About'),
//   loading: Loading,
// });

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Admin}/>
    </Switch>
  </Router>
);

export default App;