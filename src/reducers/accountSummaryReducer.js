import _ from 'lodash';    
import * as types from '../actions/actionTypes';
import AccountSummaryApi from '../api/home/accountSummaryApi';
            
// const getAccountSummaryData2 = (search) => {
//     // let request = action.payload;
//     // request += "&assetType=" + state.search.assetType + 
//     //             "&investorAccount=" + state.search.investorAccount
//     //             "&investmentDate=" + state.search.investmentDate;
    
//     // let AccountSummaryResultData = {};
//     // fetch(request).then(response => {
//     //                     if (response.status >= 400) {
//     //                         throw new Error("Bad response from server");
//     //                     }
//     //                     return response.json(); })
//     //                .then(json => AccountSummaryResult=json);
    
//     // mock the data before the API is ready
//     // after the API is ready, this code will be updated
//     let AccountSummaryResult = [];
//     if (_.isEmpty(search)) {         
//         return AccountSummaryResult;
//     }
//     else {
//         let account = search.investorAccount;
//         // if account is empty, select all "Investor Account"
//         return _.filter(AccountSummaryResult, item => (!_.trim(account) || item.name === search.investorAccount));
//     }
// }
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
        // case types.SEARCH_ACCOUNT_SUMMARY:

        //     console.log("1: ");
        //     AccountSummaryApi.getAccountSummaryData(action.search)
        //     .then(result => {
        //         console.log("2: ");
        //         Object.assign({}, state, {searchResult: result});
        //         return state;
        //     });
        //     console.log("3: ");

        //     return state;
        
        case types.SEARCH_ACCOUNT_SUMMARY_PENDING:
            return { ...state, isPending: true };
        case types.SEARCH_ACCOUNT_SUMMARY_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, searchResult: action.payload, lastUpdated: Date.now() };
        case types.SEARCH_ACCOUNT_SUMMARY_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.PRINT_ACCOUNT_SUMMARY:
            console.log(state);

            return { ...state };

        default: console.log("default: " + JSON.stringify(state));
            return state;
    }
};

export default accountSummaryReducer;