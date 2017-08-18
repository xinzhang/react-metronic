import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import FooterPage from '../containers/FooterPage';

// Sub Layouts
import HomeSubLayout from './HomeSubLayout';
import SupportSubLayout from './SupportSubLayout';
import SiteMapSubLayout from './SiteMapSubLayout';

import './PrimaryLayout.css';

const PrimaryLayout = ({ match, location }) => {

  return (
    <div className="c-primary-layout">    
      <div className="c-primary-header-content">
        <TopHeader /> 
        <div>
          <Switch location={location}>
            <Route path={ `${match.path}` } exact component={ HomeSubLayout } />
            <Route path={ `${match.path}/home` } component={ HomeSubLayout } />
            <Route path={ `${match.path}/support` } component={ SupportSubLayout } />
            <Route path={ `${match.path}/site-map` } component={ SiteMapSubLayout } />
            <Redirect to={ `${match.url}` } />
          </Switch>
        </div>
      </div>
      <div className="c-primary-footer">
        <FooterPage /> 
      </div>
    </div>
  );
};

export default withRouter(PrimaryLayout);



/*
  // backup of the Route
  <Switch>
    <Route path={ `${match.path}` } exact component={ HomeSubLayout } />
    <Route path={ `${match.path}/home` } component={ HomeSubLayout } />
    <Route path={ `${match.path}/support` } component={ SupportSubLayout } />
    <Route path={ `${match.path}/site-map` } component={ SiteMapSubLayout } />
    <Redirect to={ `${match.url}` } />
  </Switch>
*/