import axios from 'axios'
export const axiosAPI = () => {
    return axios.create({
        baseURL: process.env.NODE_ENV !== 'production' ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD,
        headers: {
            Accept: 'application/json',
        },
    });
}