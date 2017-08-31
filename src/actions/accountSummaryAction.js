import * as types from './actionTypes';
import AccountSummaryApi from '../api/home/accountSummaryApi';

export const searchAccountSummary = (search) => {
    return {
        type: types.SEARCH_ACCOUNT_SUMMARY,
        payload: AccountSummaryApi.getAccountSummaryData(search),
    }
};


export const getAccountList = () => {
    return {
        type: types.GET_ACCOUNT_LIST,
        payload: AccountSummaryApi.getAccountSummaryData({}),
    }
};

export const printAccountSummary = () => {
    return {
        type: types.PRINT_ACCOUNT_SUMMARY,   
    }
};

export const searchPortfolioFundSummary = (search) => {
    return {
        type: types.SEARCH_PORTFOLIO_FUND_SUMMARY,
        payload: AccountSummaryApi.getPortfolioFundData(search),
    }
};

export const searchPortfolioDepositSummary = (search) => {
    return {
        type: types.SEARCH_PORTFOLIO_DEPOSIT_SUMMARY,
        payload: AccountSummaryApi.getPortfolioDepositData(search),
    }
};

export const printPortfolioSummary = () => {
    return {
        type: types.PRINT_PORTFOLIO_SUMMARY,   
    }
};

// export const searchAccountSummary = (search) => {
//     return {
//         type: 'account_summary',
//         payload: getAccountSummaryData(search)
//     }
// }
