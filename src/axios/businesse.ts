import { axiosAPI } from './axios'

// Get all businesses types API `GET`
export const GetBusinesseTypes = async () => axiosAPI().get(`/get_type_businesses`).then((res) => res.data);