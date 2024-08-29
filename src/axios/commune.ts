import { axiosAPI } from './axios'

// Get User info API `GET`
export const getCommunes = async ({ query, limit }: { query: string, limit: number }) => axiosAPI().get(`/get_communes?limit=${limit}&search=${query}`).then((res) => res.data);