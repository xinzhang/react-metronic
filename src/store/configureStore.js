import { createStore, applyMiddleware } from 'redux';
//import { createStore, applyMiddleware, compose } from 'redux';
//import { formJS } from 'immutable';
//import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
//import { browserHistory } from 'react-redux';
//import { routerMiddle } from 'react-router-redux';
//import logger from './logger';
import rootReducer from '../reducers';

/*
const storageConfig = {
    key: 'client-portal-NAS',
    serialize: (store) => {
        return store && store.session ? JSON.stringify(store.session) : store;
    },
    deserialize: (state) => ({
        session: state ? JSON.parse(state) : {}
    })
};
const configureStore = (initialState) => {
    const store = compose (
        //__DEV__
        //    ? applyMiddleware(promiseMiddleware, thunk, logger)
        //    : applyMiddleware(promiseMiddleware, thunk),
        applyMiddleware(promiseMiddleware, thunk),
        persistState('session', storageConfig)
    )(createStore)(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => {
                const nextRootReducer = require('../reducers');
                store.replaceReducer(nextRootReducer);
            }
        );
    }

    return store;
};
*/

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        promiseMiddleware
    )
);

export default store;