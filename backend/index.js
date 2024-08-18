const express = require('express');
const { decryptRequest, encryptResponse, setServerConfig, server } = require('encryption-npm-package');
const cors = require('cors')


const app = express();
app.use(cors())

let config = {
    jwtSecret: 'qwertyuiopasdfghjklzxcvbnmsdfghj',
    server: {
        requestLogs: true,
        responseLogs: true,
    },
};

setServerConfig(config);

console.log(server);


app.use(decryptRequest)
app.use(encryptResponse)

app.post('/test', (req, res) => {
    if (req.body) {
        res.json({ message: 'received successfully' });
    }
    else {
        res.status(500).json({ message: 'Something Went Wrong' });
    }
})

app.get('/', (req, res) => {
    res.send('connected');
})

app.listen(5000, () => {
    console.log('app is running at http://localhost:5000');
})