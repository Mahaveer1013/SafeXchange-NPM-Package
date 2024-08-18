// config.js
let config = {
    jwtSecret: '',
    client: {
        baseUrl: '',
        requestLogs: false,
        responseLogs: false,
        withCredentials: false,
    },
    server: {
        requestLogs: false,
        responseLogs: false,
    },
};

export const setConfig = (newConfig) => {
    config = { ...config, ...newConfig };
};

export const getConfig = () => config;

