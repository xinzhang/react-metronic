import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
    fundList: [],
    orderFundList: [],
    fundDetailsList: [],
};

const FundReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.GET_FUND_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_FUND_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, fundList: action.payload, lastUpdated: Date.now() };
        case types.GET_FUND_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.GET_FUND_DETAILS_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_FUND_DETAILS_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, fundDetailsList: action.payload, lastUpdated: Date.now() };
        case types.GET_FUND_DETAILS_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.GET_ORDER_FUND_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_ORDER_FUND_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, orderFundList: action.payload, lastUpdated: Date.now() };
        case types.GET_ORDER_FUND_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        default:
            return state;
    }
};

export default FundReducer;
