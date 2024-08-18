import {api} from './mjs/client/api.mjs'
import {encryptApi} from './mjs/client/encryptApi.mjs'
import {setClientConfig} from './mjs/client/config.mjs'
import { setServerConfig } from './mjs/server/config.mjs'
import { encryptResponse, decryptRequest } from './mjs/server/api.mjs'

const client = 'client';

export { api, encryptApi, client, setClientConfig, setServerConfig, encryptResponse, decryptRequest  }