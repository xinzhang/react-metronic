import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import store from './store/configureStore';
import AuthorizedRoute from './containers/AuthorizedRoute';

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout';
import PrimaryLayout from './layouts/PrimaryLayout';
 
const App = () => {
  return (
    <Provider store={ store } >
      <Router >
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
