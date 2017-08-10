import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import store from './store/configureStore';
import FooterPage from './containers/FooterPage';
import AuthorizedRoute from './containers/AuthorizedRoute';

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
import PrimaryLayout from './layouts/PrimaryLayout';
//import './App.css';
 
const App = () => {
  return (
    <div className="wrapper">
    <Provider store={ store } >
      <Router >
        <div>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    </Provider>
  </div>
  );
};

export default App;
