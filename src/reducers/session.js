import { LOGIN_USER_PENDING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER } from '../constants';
//import { formJS } from 'immutable';
/*
const INITIAL_STATE = formJS({
    token: null,
    user: {},
    hasError: false,
    isLoading: false
});
*/
const INITIAL_STATE = {
    token: null,
    user: {},
    hasError: false,
    isLoading: false
};


const sessionReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case LOGIN_USER_PENDING:
            return { ...state, 
                        token: null,
                        user: {},
                        hasError: false,
                        isLoading: true
                    };
            /*
            return { ...state, 
                     session: {
                        token: null,
                        user: {},
                        hasError: false,
                        isLoading: true
                     }
                    ;
            */
        case LOGIN_USER_SUCCESS:
            return { ...state, 
                        token: action.payload.token,
                        user: action.payload.profile,
                        hasError: false,
                        isLoading: false
                    };
        case LOGIN_USER_ERROR:
            return { ...state, 
                        hasError: true,
                        isLoading: false
                    };
        case LOGOUT_USER:
            return { ...state, INITIAL_STATE };
        default:
            return state;
    }
};

export default sessionReducer;