import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    fundDetailsList: [],
    paymentDetailsList: [],
};

const orderPadReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.ADD_ORDER_PENDING:
            return { ...state, isPending: true };
        case types.ADD_ORDER_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, lastUpdated: Date.now() };
        case types.ADD_ORDER_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        default: 
            return state;
    }
};

export default orderPadReducer;
