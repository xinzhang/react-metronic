import React from 'react';
import FooterPage from '../FooterPage';
import './ForgotPasswordPage.css';



const ForgotPasswordPage = () => {
  const goBack = () => {
    return window.history.back();
  };

  return (
    <div className="c-forget-layout">
      <div className="c-forget-container">     
        <div className="c-forget-title"><h3>Forget Password</h3></div>
        <div className="c-forget-content">
          <form className="forget-form" method="post">
              <p> Enter your e-mail address below to reset your password. </p>
              <div className="form-group">
                  <div className="input-icon">
                      <i className="fa fa-envelope"></i>
                      <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" /> </div>
              </div>
              <div className="form-actions">
                  <button type="button" id="back-btn" className="btn grey-salsa btn-outline" onClick={ goBack }> Back </button>
                  <button type="button" className="btn green pull-right"> Submit </button>
              </div>
          </form>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ForgotPasswordPage;