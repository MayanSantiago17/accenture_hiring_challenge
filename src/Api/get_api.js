import axios from "axios";


const urlApi = 'https://jsonplaceholder.typicode.com';

const getAxios = (url) => axios.get(`${urlApi}${url}`);

const axiosPost = (url, body) => {
    return axios.post(`${urlApi}${url}`, body, {
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }

    });
}

export {getAxios};
export {axiosPost};