const axios = require('axios');
const { getClientConfig } = require('./config.cjs');

const api = axios.create({
    baseURL: getClientConfig().client.baseUrl,
    withCredentials: getClientConfig().client.withCredentials,
});

module.exports = { api };