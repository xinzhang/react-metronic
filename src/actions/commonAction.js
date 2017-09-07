import * as types from './actionTypes';
import CommonApi from '../api/home/commonApi';

export const getAssetTypeList = (obj) => {
    return {
        type: types.GET_ASSET_TYPE_LIST,
        payload: CommonApi.getAssetTypeList(obj),
    }
};

export const getBuySellList = (obj) => {
    return {
        type: types.GET_BUY_SELL_LIST,
        payload: CommonApi.getBuySellList(obj),
    }
};

             
