import axios from 'axios'

const api = axios.create({
    baseURL: 'https://long-rubber.herokuapp.com/api/v1',

})
api.interceptors.request.use((confiq) => {
    confiq.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        Accept: "application/json",
    };
    return confiq;
},
    erorr => {
        return erorr;
    }
);
api.interceptors.response.use(
    function (response) {
        // Response with status code 2xx is here
        // we can do someting in data

        return response;
    },
    async function (error) {
        // response with status code > 200 is here
        alert('Request faild')

        return Promise.reject(error);
    }
);


export default api;