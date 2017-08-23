import { SEARCHACCOUNTSUMMARY, PRINTACCOUNTSUMMARY } from '../constants/AccountSummary';

export const searchAccountSummary = () => {
    return {
        type: SEARCHACCOUNTSUMMARY
    }
};

export const printAccountSummary = () => {
    return {
        type: PRINTACCOUNTSUMMARY
    }
};

