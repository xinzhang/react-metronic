import * as types from './actionTypes';
import AccountSummaryApi from '../api/home/accountSummaryApi';

// Account Summary
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

// Portfolio Summary
export const getAccountList = () => {
    return {
        type: types.GET_ACCOUNT_LIST,
        payload: AccountSummaryApi.getAccountList({}),
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

// Transaction History
export const getFundList = (obj) => {
    return {
        type: types.GET_FUND_LIST,
        payload: AccountSummaryApi.getFundList(obj),
    }
};

export const getDepositList = (obj) => {
    return {
        type: types.GET_DEPOSIT_LIST,
        payload: AccountSummaryApi.getDepositList(obj),
    }
};

export const searchFundTransactionHistory = (obj) => {
    return {
        type: types.SEARCH_FUND_TRANSACTION_HISTORY,
        payload: AccountSummaryApi.getFundTransactionHistory(obj),
    }
};

export const searchDepositTransactionHistory = (obj) => {
    return {
        type: types.SEARCH_DEPOSIT_TRANSACTION_HISTORY,
        payload: AccountSummaryApi.getDepositTransactionHistory(obj),
    }
};

export const printTransactionHistory = () => {
    return {
        type: types.PRINT_TRANSACTION_HISTORY,   
    }
};


