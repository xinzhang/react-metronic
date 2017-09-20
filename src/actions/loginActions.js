
// import {encode, encrypt} from '../utils/crypt';
import {loginUser} from '../api/account/loginApi'

export const LOGOUT_USER = 'LOGOUT_USER'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const login = (user) => {
    console.log('process.env.REACT_APP_PROVIDER ', process.env.REACT_APP_PROVIDER);
    const app_provider = process.env.REACT_APP_PROVIDER || 'json';
    console.log('app_provider', app_provider);

    if (app_provider === 'json')
    { 
      return {
        type: LOGIN_USER_FULFILLED,
        payload: {
          userName:user.userName,
          error:''
        }
      }
    } else { //return promise
        console.log("login_user");
      return {   
          type: LOGIN_USER,
          payload: loginUser(user),
      }
    }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
    payload: {
      userName:'',
      error:''
    }
  }
}
