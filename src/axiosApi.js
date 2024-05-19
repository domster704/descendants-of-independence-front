import axios from 'axios';
import { apiUrl } from './constants';

const axiosApi = axios.create({
    baseURL: apiUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default axiosApi;
