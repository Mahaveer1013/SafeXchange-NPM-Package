import axios  from 'axios';
import CryptoJS  from 'crypto-js';
import { getConfig } from '../config';

const encryptApi = axios.create({
    baseURL: getConfig().client.baseUrl,
    withCredentials: getConfig().client.withCredentials,
});


const encryptValue = (value) => {
    try {
        return CryptoJS.AES.encrypt(JSON.stringify(value), getConfig().jwtSecret).toString();
    } catch (error) {
        console.error('Error during value encryption:', error);
        throw error;
    }
};

const decryptValue = (encryptedValue) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, getConfig().jwtSecret);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
            throw new Error('Decryption failed or result is empty');
        }
        console.log(typeof decryptedText, typeof JSON.parse(decryptedText));

        return JSON.parse(decryptedText);
    } catch (error) {
        console.error('Error during decryption:', error);
        throw error;
    }
};

// Request interceptor to encrypt data
encryptApi.interceptors.request.use((request) => {
    if (request.data) {
        if (getConfig.client.requestLogs) {
            console.log('Before request encryption \n', request.data);
        }
        request.data = encryptValue(request.data);
        request.headers['Content-Type'] = 'application/octet-stream';
        if (getConfig.client.requestLogs) {
            console.log('After request encryption \n', request.data);
        }
    }
    return request;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor to decrypt data
encryptApi.interceptors.response.use((response) => {
    if (response.data && response.enc) {
        if (getConfig.client.responseLogs) {
            console.log('Before response decryption \n', response.data);
        }
        response.data = decryptValue(response.data);
        if (getConfig.client.responseLogs) {
            console.log('After response decryption \n', response.data);
        }
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default encryptApi
