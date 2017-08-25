import { SEARCH_ACCOUNT_SUMMARY, PRINT_ACCOUNT_SUMMARY } from '../constants/AccountSummary';

export const searchAccountSummary = (search) => {
    // prepare the promise of fetch
    let request = "/ClientPortal/NAS/api/account_summary";
    return {
        type: SEARCH_ACCOUNT_SUMMARY,
        payload: request,
        search: search,
    }
};

export const printAccountSummary = () => {
    return {
        type: PRINT_ACCOUNT_SUMMARY,   
    }
};



