import api from '../plugins/axios';
import { loading, phoneNumber } from '../features/user/userSlice';

export const userActions = {
    login,
    verify
};

function login(data) {
    return dispatch => {
        dispatch(loading(true));
        dispatch(phoneNumber(data));
        try {
            return api.post("/login", data)
        } catch (e) {
            return console.error(e.message);
        }
    };
}
function verify(data) {
    return dispatch => {
        dispatch(loading(true));
        try {
            return api.post("/login/otp", data)
        } catch (e) {
            return console.error(e.message);
        }
    };
}
 