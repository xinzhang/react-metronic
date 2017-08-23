import { SEARCHACCOUNTSUMMARY, PRINTACCOUNTSUMMARY } from '../constants/AccountSummary';

const INITIAL_STATE = {
};

const accountSummaryReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SEARCHACCOUNTSUMMARY:
            return { ...state };
        case PRINTACCOUNTSUMMARY:
            return { ...state };
        default:
            return state;
    }
};

export default accountSummaryReducer;