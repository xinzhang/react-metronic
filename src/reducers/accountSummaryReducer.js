import { SEARCH_ACCOUNT_SUMMARY, PRINT_ACCOUNT_SUMMARY } from '../constants/AccountSummary';
import _ from 'lodash';        

            
const getAccountSummaryResult = (search) => {
    // let request = action.payload;
    // request += "&assetType=" + state.search.assetType + 
    //             "&investorAccount=" + state.search.investorAccount
    //             "&investmentDate=" + state.search.investmentDate;
    
    // let AccountSummaryResultData = {};
    // fetch(request).then(response => {
    //                     if (response.status >= 400) {
    //                         throw new Error("Bad response from server");
    //                     }
    //                     return response.json(); })
    //                .then(json => AccountSummaryResult=json);
    
    // mock the data before the API is ready
    // after the API is ready, this code will be updated
    const AccountSummaryResult = [
        {
            number: '000001',
            name: 'account_1',
            balance: '123',
        },
        {
            number: '000002',
            name: 'account_2',
            balance: '100',
        },
        {
            number: '000003',
            name: 'account_3',
            balance: '200',
        },
        {
            number: '000003',
            name: 'account_4',
            balance: '200',
        },
        {
            number: '000003',
            name: 'account_5',
            balance: '200',
        },
        {
            number: '000003',
            name: 'account_1',
            balance: '999',
        },
    ];
    
    if (_.isEmpty(search)) {         
        return AccountSummaryResult;
    }
    else {
        let account = search.investorAccount;
        // if account is empty, select all "Investor Account"
        return _.filter(AccountSummaryResult, item => (!_.trim(account) || item.name === search.investorAccount));
    }
}

const INITIAL_STATE = {
    searchResult: getAccountSummaryResult({}),
};

const accountSummaryReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SEARCH_ACCOUNT_SUMMARY:
            let resultData = getAccountSummaryResult(action.search);

            return { ...state, searchResult: resultData };

        case PRINT_ACCOUNT_SUMMARY:
            console.log(state);

            return { ...state };

        default:
            return state;
    }
};

export default accountSummaryReducer;