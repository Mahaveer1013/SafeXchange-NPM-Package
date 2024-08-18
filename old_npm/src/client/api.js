import axios from 'axios';
import { getConfig } from '../config';

const api = axios.create({
    baseURL: getConfig().client.baseUrl,
    withCredentials: getConfig().client.withCredentials,
});

export default api