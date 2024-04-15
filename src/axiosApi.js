import axios from 'axios';
import { apiUrl } from './constants';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/' /* apiUrl */,
});

export default axiosApi;
