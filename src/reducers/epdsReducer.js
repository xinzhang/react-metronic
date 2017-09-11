import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
    value: '',
    epdsList: [],
    isPending: false,
    epdsDocData: '',
};

const epdsReducer = (state = INITIAL_STATE, action = {}) => {
    console.log('epds reducer', action.type);
    switch (action.type) {
        case types.SEARCH_EPDS_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_EPDS_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, epdsList: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_EPDS_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };
        case types.UPDATE_EPDS_SEARCH_VALUE:
            return {...state, value:action.value}
        case types.CLEAR_EPDS_LIST:
            return {...state, epdsList:[]}
        case types.GET_EPDS_DOC_FULFILLED:
            console.log('epds reducer DOC_FULFILLED', action);
            return {...state, epdsDocData:action.payload}
        default:
            return state;
    }
};

export default epdsReducer;
