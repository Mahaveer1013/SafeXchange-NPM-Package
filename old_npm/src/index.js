import api from './client/api';
import encryptApi from './client/encryptApi';
const hello = () => {
    return 'hello';
}

export {
    api,
    encryptApi,
    hello
};

export { decryptRequest, encryptResponse } from './server/api'
export { setConfig } from './config'
