import { LOGIN_USER_PENDING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER, FORM_RESET } from '../constants';
import { login } from '../api/login';

export const loginUser = () => {
    return (dispatch, getState) => {
        const username = getState().form.login.username.value;
        const password = getState().form.login.password.value;

        return dispatch({
            type: [
                LOGIN_USER_PENDING,
                LOGIN_USER_SUCCESS,
                LOGIN_USER_ERROR
            ],
            payload: {
                promise: login(username, password)
                            .then((res) => {
                                dispatch({
                                    type: FORM_RESET,
                                    form: 'login'
                                });

                                return res;
                            })
            }
        });
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
};