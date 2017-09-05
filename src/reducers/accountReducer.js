import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    accountList: [],
};

const AccountReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.GET_ACCOUNT_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_ACCOUNT_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, accountList: action.payload, lastUpdated: Date.now() };
        case types.GET_ACCOUNT_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        default: 
            return state;
    }
};

export default AccountReducer;