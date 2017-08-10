import { INCREMENT_COUNTER, DECREMENT_COUNTER, LOGOUT_USER } from '../constants';
//import { formJS } from 'immutable';

/*
const INITIAL_STATE = formJS({
    count: 0
});
*/
const INITIAL_STATE = {
    count: 0
};

const counterReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count+1 };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count-1 };
        case LOGOUT_USER:
            return { ...state, INITIAL_STATE };
        default:
            return state;
    }
};

export default counterReducer;