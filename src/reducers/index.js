import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import session from './session';
import loggedUserReducer from './loggedUserReducer';

const rootReducer = combineReducers({
    rounting: routerReducer,
    form: formReducer,
    session,
    counter, 
    loggedUserState: loggedUserReducer,
});

export default rootReducer;