// config.js
let config = {
    jwtSecret: '',
    client: {
        baseUrl: '',
        requestLogs: false,
        responseLogs: false,
        withCredentials: false,
    },
};

const setClientConfig = (newConfig) => {
    config = { ...config, ...newConfig };
};

const getClientConfig = () => config;

export { setClientConfig, getClientConfig }