import isPromise from '../utils/isPromise';

const promiseMiddleware = ({ dispatch }) => {
    return next => action => {
        if (!isPromise(action.payload)) {
            return next(action);
        }

        const { types, payload, meta } = action;
        const { promise, data } = payload;
        const { PENDING, FULFILLED, REJECTED } = types;

        // dispatch the pending action
        dispatch({
            type: PENDING,
            ...data && { payload: data },
            ...meta && { meta }, 
        });

        // if successful, dispatch the fulfilled action, 
        // otherwise, dispatch the rejected action
        return promise.then(
            result => {
                dispatch({
                    type: FULFILLED,
                    payload: result,
                    meta 
                });
            },
            error => {
                dispatch({
                    type: REJECTED,
                    payload: error,
                    meta 
                });
            }
        );
    };
}; 

export default promiseMiddleware;