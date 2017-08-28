import * as types from './actionTypes';
import AccountSummaryApi from '../api/home/accountSummaryApi';

export const searchAccountSummary = (search) => {
    return {
        type: types.SEARCH_ACCOUNT_SUMMARY,
        payload: AccountSummaryApi.getAccountSummaryData(search),
    }
};

export const printAccountSummary = () => {
    return {
        type: types.PRINT_ACCOUNT_SUMMARY,   
    }
};


// export const searchAccountSummary = (search) => {
//     return {
//         type: 'account_summary',
//         payload: getAccountSummaryData(search)
//     }
// }
