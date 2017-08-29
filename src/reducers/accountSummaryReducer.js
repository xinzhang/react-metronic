import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    searchResult: [],
};

// AccountSummaryApi.getAccountSummaryData({})
//     .then(result => {
//         INITIAL_STATE.searchResult = result;
//     });

const accountSummaryReducer = (state = INITIAL_STATE, action = {}) => {
    console.log("INITIAL_STATE: " + JSON.stringify(state));

    switch (action.type) {        
        case types.SEARCH_ACCOUNT_SUMMARY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_ACCOUNT_SUMMARY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, searchResult: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_ACCOUNT_SUMMARY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.PRINT_ACCOUNT_SUMMARY:
            return { ...state };

        default: console.log("default: " + JSON.stringify(state));
            return state;
    }
};

export default accountSummaryReducer;