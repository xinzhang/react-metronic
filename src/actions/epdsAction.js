import * as types from './actionTypes';
import epdsApi from '../api/epds/epdsApi';

export const searchEPDS = (filterText) => {
    return {
        type: types.SEARCH_EPDS,
        payload: (new epdsApi()).searchEPDS(filterText)
    }
};

export const getEPDSDoc = (docLink) => {
    return {
        type: types.GET_EPDS_DOC,   
        payload: (new epdsApi()).getEPDSDoc(docLink)
    }
};

