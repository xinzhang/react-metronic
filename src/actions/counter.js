import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';

export const increment = () => {
    return {
        type: INCREMENT_COUNTER
    }
};

export const decrement = () => {
    return {
        type: DECREMENT_COUNTER
    }
};