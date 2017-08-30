
import {encode, encrypt} from '../utils/crypt';
import {loginUser} from '../api/account/loginApi'

export const LOGOUT_USER = 'LOGOUT_USER'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const login = (user) => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development')
    {
      return {
        type: LOGIN_USER_FULFILLED,
        payload: {
          userName:'test',
          error:''
        }
      }
    } else {
      return {
          type: LOGIN_USER,
          payload: loginUser(user),
      }
    }
};
