import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
//import loggedUserReducer from './loggedUserReducer';
import accountSummaryReducer from './accountSummaryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    rounting: routerReducer,
    form: formReducer,
    // session,
    // counter,
    user: userReducer,
    accountSummaryState: accountSummaryReducer,
});

export default rootReducer;
