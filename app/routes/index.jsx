import React from 'react';
import { Router, Route } from 'react-router';
import Landing from '../landing';

const Routes = ({ history }) => {
  return (
    <Router history={ history }>
      <Route path="*" component={ Landing } />
    </Router>
  );
};

export default Routes;
