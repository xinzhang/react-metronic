import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    epdsList: [],
};

const epdsReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.SEARCH_EPDS_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_EPDS_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, epdsList: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_EPDS_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        default: 
            return state;
    }
};

export default epdsReducer;