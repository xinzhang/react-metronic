import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
//import persistState from 'redux-localstorage';

// Log only in development
const middlewares = [];
middlewares.push(thunk, promiseMiddleware());

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;

// normal way to add logger
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunk,
//         promiseMiddleware(), // be careful here, we need to use promiseMiddleware(), not promiseMiddleware
//         logger
//     )
// );

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
