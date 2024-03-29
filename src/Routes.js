import React from 'react';
import Layout from './Compomemts/HOC/Layout';
import {Switch, Route} from 'react-router-dom';
import Home from './Compomemts/home';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
}

export default Routes;
