import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    portfolioFundResult: [],
    portfolioDepositResult: [],
};

// AccountSummaryApi.getAccountSummaryData({})
//     .then(result => {
//         INITIAL_STATE.searchResult = result;
//     });

const PortfolioSummaryReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.SEARCH_PORTFOLIO_FUND_SUMMARY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_PORTFOLIO_FUND_SUMMARY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, portfolioFundResult: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_PORTFOLIO_FUND_SUMMARY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.SEARCH_PORTFOLIO_DEPOSIT_SUMMARY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_PORTFOLIO_DEPOSIT_SUMMARY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, portfolioDepositResult: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_PORTFOLIO_DEPOSIT_SUMMARY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.PRINT_PORTFOLIO_SUMMARY:
            return { ...state };

        default: 
            return state;
    }
};

export default PortfolioSummaryReducer;