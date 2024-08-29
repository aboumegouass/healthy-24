import axios from 'axios'

export const axiosAPI = () => {

    return axios.create({
        baseURL: 'https://staging.raabit.dev/v1',
        headers: {
            Accept: 'application/json',
            'Accept-Language': 'ar',
        },
    });
}