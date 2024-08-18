const express = require('express');
const { decryptRequest, encryptResponse, setServerConfig, } = require('safexchange');
const cors = require('cors')


const app = express();
app.use(cors())

let config = {
    jwtSecret: 'qwertytresdcvbnjuytrdfgoiuytrewsxcvbn',
    server: {
        requestLogs: true,
        responseLogs: true,
    },
};

setServerConfig(config);

app.use(decryptRequest)
app.use(encryptResponse)

app.post('/test', (req, res) => {
    try {
        console.log(req.body);
        res.json({ message: 'received successfully' });
    } catch (error) {
        console.log(error);
    }
})

app.get('/', (req, res) => {
    res.send('connected');
})

app.listen(5000, () => {
    console.log('app is running at http://localhost:5000');
})