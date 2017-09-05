import { encrypt } from '../utils/crypt';
import * as actions from '../actions/loginActions'

const initialState = Object.assign({
  userName : '',
  error: ''
});


export default function userReducer (state = initialState, action ){
  console.log(action, state);
  switch (action.type){
    case actions.LOGIN_USER_PENDING:
      return {...state, isPending:true};

    case actions.LOGIN_USER_FULFILLED:
      //update the data into localstorage
      let authString = encrypt(action.payload);
      localStorage.setItem('authorisationData', authString);
      var d = {...state, isPending:false, ...action.payload, lastUpdated:Date.now()}
      console.log(d);
      return d;
      //return {...state, isPending:false, data:action.payload, lastUpdated:Date.now()}

    case actions.LOGIN_USER_REJECTED:
      return { ...state, isPending: false, didInvalidate: true, error: action.error };

    case actions.LOGOUT_USER:
      return { ...initialState, isPending:false};

    default:
      return state;
  }
}
