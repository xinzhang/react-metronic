import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions';

import './login-3.min.css';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      account:{}
    }

    this.login = this.login.bind(this);
    this.updateLoginData = this.updateLoginData.bind(this);
  }

  login() {
      this.props.actions.login(this.state.account);
  }

  updateLoginData(event) {
      const field = event.target.name;
      const acct = this.state.account;
      acct[field] = event.target.value;

      return this.setState({account: acct});
  }


  componentWillReceiveProps(nextProps) {
      console.log('login componentWillReceiveProps:', nextProps);
      if (nextProps.user && nextProps.user.userName && nextProps.user.userName !== '') {
        if (this.props.user && this.props.user.userName !== nextProps.user.userName) {
          this.props.history.push('/app/home/account-summary/account-summary');
        }
      }
  }
  
  render() {

    return (
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
                      <input className="form-control placeholder-no-fix" type="text" autoComplete="off"
                        placeholder="Username" name="userName"
                        required
                        onChange={this.updateLoginData} /> </div>
              </div>
              <div className="form-group">
                  <div className="input-icon">
                      <i className="fa fa-lock"></i>
                      <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password"
                        onChange={this.updateLoginData}/> </div>
              </div>
              <div className="form-actions c-login">
                  <button type="button" className="btn green pull-right"
                      onClick={this.login} >
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
  }
}

function mapStateToProps(state, ownProps) {
  console.log('login mapStateToProps:',state);
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( LoginPage );
