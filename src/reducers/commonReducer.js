import * as types from '../actions/actionTypes';
            
const INITIAL_STATE = {
    assetTypeList: [],
    buySellList: [],
};

const commonReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {        
        case types.GET_ASSET_TYPE_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_ASSET_TYPE_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, assetTypeList: action.payload, lastUpdated: Date.now() };
        case types.GET_ASSET_TYPE_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        case types.GET_BUY_SELL_LIST_PENDING:
            return { ...state, isPending: true };
        case types.GET_BUY_SELL_LIST_FULFILLED:
            return { ...state, isPending: false, didInvalidate: false, buySellList: action.payload, lastUpdated: Date.now() };
        case types.GET_BUY_SELL_LIST_REJECTED:
            return { ...state, isPending: false, didInvalidate: true };

        default: 
            return state;
    }
};

export default commonReducer;
