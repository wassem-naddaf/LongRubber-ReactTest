import api from '../plugins/axios';
import { loading } from '../features/user/userSlice';

export const restaurantActions = {
    getAll,
    get
};

function getAll() {
    return dispatch => {
        dispatch(loading(true));
        let response, error ;
        try {
            return api.get("/restaurants")
        } catch (e) {
            console.error(e.message);
        }
    };
}
function get(id) {
    return dispatch => {
        dispatch(loading(true));
        try {
            return api.get(`/menus/restaurant/${id}`)
        } catch (e) {
            return console.error(e.message);
        } 
    };
}
