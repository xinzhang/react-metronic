import * as types from '../actions/actionTypes';
import AccountSummaryApi from '../api/home/accountSummaryApi';
            
const INITIAL_STATE = {
    searchResult: [],
};

// only get summary data after user login
// AccountSummaryApi.getAccountSummaryData({assetType: 'managed_fund'})
//     .then(result => {
//         INITIAL_STATE.searchResult = result;
//     });

const accountSummaryReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.SEARCH_ACCOUNT_SUMMARY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_ACCOUNT_SUMMARY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, searchResult: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_ACCOUNT_SUMMARY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.PRINT_ACCOUNT_SUMMARY:
            return { ...state };

        default: 
            return state;
    }
};

export default accountSummaryReducer;