import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../utils/xhr';
import logo from '../../assets/images/logo.png';

import './login-3.min.css';
import './LoginPage.css';

const LoginPage = ({ history }) => (
  <div className="login c-login-layout" >

    <div className="content c-conent" >
      <div className="c-login-title"><img src={ logo } title="NAB Asset Servicing" alt="NAB Asset Servicing" /> </div>
      
      { /* BEGIN LOGIN FORM */ }
      <form className="login-form c-login-form" action="index.html" method="post">
          <h3 className="form-title c-form-title">LOGIN to NAS</h3>
          <div className="form-group">
              { /* ie8, ie9 does not support html5 placeholder, so we just show field title for that */ }
              <div className="input-icon">
                  <i className="fa fa-user"></i>
                  <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
          </div>
          <div className="form-group">
              <div className="input-icon">
                  <i className="fa fa-lock"></i>
                  <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
          </div>
          <div className="form-actions c-login">
              <button type="button" className="btn green pull-right"
                  onClick={() => {
                      login().then(() => {
                        history.push('/app');
                      })
                    }} > 
                Login 
              </button>
          </div>
          <div className="c-forget-link">
            <div className="c-forget-username">
                <Link to="/auth/forgot-username" >Forgot Username</Link>
            </div>
            <div className="c-forgot-password">
                <Link to="/auth/forgot-password" >Forgot Password</Link>
            </div>
          </div>
          <div className="c-privacy-policy">
            <Link to="/auth/privacy-policy" >Privacy Policy</Link>
          </div>
      </form>
      { /*END LOGIN FORM */ }
    </div>
  </div>
);

export default LoginPage;
