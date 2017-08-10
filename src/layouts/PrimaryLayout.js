import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimaryHeader from '../components/PrimaryHeader';

// Sub Layouts
import HomeSubLayout from './HomeSubLayout';
import SupportSubLayout from './SupportSubLayout';
import SiteMapSubLayout from './SiteMapSubLayout';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path={ `${match.path}` } exact component={ HomeSubLayout } />
        <Route path={ `${match.path}/home` } component={ HomeSubLayout } />
        <Route path={ `${match.path}/support` } component={ SupportSubLayout } />
        <Route path={ `${match.path}/site-map` } component={ SiteMapSubLayout } />
        <Redirect to={ `${match.url}` } />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;