import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import LoginPage from '../containers/login/LoginPage';
import ForgotUsernamePage from '../containers/login/ForgotUsernamePage';
import ForgotPasswordPage from '../containers/login/ForgotPasswordPage';
import PrivacyPolicyPage from '../containers/login/PrivacyPolicyPage';

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    {/*
    
    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...
    
    For this example project, we'll just have a Login Page
    
    */}
    <Switch>
      <Route path="/auth/login" exact component={ LoginPage } />
      <Route path="/auth/forgot-username" component={ ForgotUsernamePage } />
      <Route path="/auth/forgot-password" component={ ForgotPasswordPage } />
      <Route path="/auth/privacy-policy" component={ PrivacyPolicyPage } />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
)

export default UnauthorizedLayout;