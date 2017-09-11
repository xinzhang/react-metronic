import { encrypt } from '../utils/crypt';
import * as actions from '../actions/loginActions'

const initialState = Object.assign({
  userName : '',
  error: ''
});


export default function userReducer (state = initialState, action ){
  
  switch (action.type){
    case actions.LOGIN_USER_PENDING:
      return {...state, isPending:true};

    case actions.LOGIN_USER_FULFILLED:
      //update the data into localstorage
      let authString = encrypt(action.payload);
      localStorage.setItem('authorisationData', authString);
      return {...state, isPending:false, ...action.payload, lastUpdated:Date.now()}

    case actions.LOGIN_USER_REJECTED:
      return { ...state, isPending: false, didInvalidate: true, error: action.error };

    case actions.LOGOUT_USER:
      return { ...initialState, isPending:false};

    default:
      return state;
  }
}
