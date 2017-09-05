import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    fundTransactionHistory: [],
    depositTransactionHistory: [],
};

// AccountSummaryApi.getAccountSummaryData({})
//     .then(result => {
//         INITIAL_STATE.searchResult = result;
//     });

const TransactionHistoryReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.SEARCH_FUND_TRANSACTION_HISTORY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_FUND_TRANSACTION_HISTORY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, fundTransactionHistory: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_FUND_TRANSACTION_HISTORY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.SEARCH_DEPOSIT_TRANSACTION_HISTORY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_DEPOSIT_TRANSACTION_HISTORY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, depositTransactionHistory: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_DEPOSIT_TRANSACTION_HISTORY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.PRINT_TRANSACTION_HISTORY:
            return { ...state };

        default: 
            return state;
    }
};

export default TransactionHistoryReducer;
