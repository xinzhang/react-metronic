import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import AuthorizedRoute from './containers/AuthorizedRoute';

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
import PrimaryLayout from './layouts/PrimaryLayout';

import './App.css';
 
const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { appear: 500, enter: 500, exit: 500 };

  return (
        <TransitionGroup className="c-transition-group">
          <CSSTransition key={currentKey} timeout={timeout} classNames="c-fadeTranslate" appear>
            <section className="c-fix-container">
              <Switch location={location}>
                <Route path="/auth" component={ UnauthorizedLayout } />
                <AuthorizedRoute path="/app" component={ PrimaryLayout } />
                <Redirect to="/auth" />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
  );
};

export default withRouter(App);

/*
<Provider store={ store } >
      <Router >
        <Switch>
          <Route path="/auth" component={ UnauthorizedLayout } />
          <AuthorizedRoute path="/app" component={ PrimaryLayout } />
          <Redirect to="/auth" />
        </Switch>
      </Router>
</Provider>        
*/        