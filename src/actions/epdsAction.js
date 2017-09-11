import * as types from './actionTypes';
import epdsApi from '../api/epds/epdsApi';

export const searchEPDS = (filterText) => {
    return {
        type: types.SEARCH_EPDS,
        payload: (new epdsApi()).searchEPDS(filterText)
    }
};

export const getEPDSDoc = (apir) => {
    return {
        type: types.GET_EPDS_DOC,
        payload: (new epdsApi()).getEPDSDoc(apir)
    }
};

export const updateEPDSSearchValue = (value) => {
  return {
    type: types.UPDATE_EPDS_SEARCH_VALUE,
    value
  };
}

export const clearEPDSList = () => {
  return {
    type: types.CLEAR_EPDS_LIST
  };
}
