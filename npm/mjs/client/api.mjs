import axios from 'axios';
import { getClientConfig } from './config.mjs';

const api = axios.create({
    baseURL: getClientConfig().client.baseUrl,
    withCredentials: getClientConfig().client.withCredentials,
});

export { api };