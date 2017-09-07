import * as types from './actionTypes';
import OrderPadApi from '../api/home/orderPadApi';

export const getFundDetailsList = (obj) => {
    return {
        type: types.GET_FUND_DETAILS_LIST,
        payload: OrderPadApi.getFundDetailsList(obj),
    }
};

export const getPaymentDetailsList = (obj) => {
    return {
        type: types.GET_PAYMENT_DETAILS_LIST,   
        payload: OrderPadApi.getPaymentDetailsList(obj),
    }
};

// Transaction History
export const addOrder = (obj) => {
    return {
        type: types.ADD_ORDER,
        payload: OrderPadApi.addOrder(obj),
    }
};

             
