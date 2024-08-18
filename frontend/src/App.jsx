import { encryptApi, setClientConfig, api } from 'safexchange';
import './App.css'

function App() {

  let config = {
    jwtSecret: 'qwertytresdcvbnjuytrdfgoiuytrewsxcvbn',
    client: {
      baseUrl: 'http://localhost:5000',
      requestLogs: true,
      responseLogs: true,
    },
  };



  setClientConfig(config);

  const fetchNormalData = async () => {
    const response = await api.post('http://localhost:5000/test', { count: 1 })
    console.log(response.data);
  }

  const fetchEncryptData = async () => {
    const response = await encryptApi.post('http://localhost:5000/test', { data: 'confidential datas', receiver: 'ram'  })
    console.log(response.data);
  }

  return (
    <>
      <button onClick={fetchEncryptData} style={{backgroundColor:'blue',color: 'white'}}>start  data transfer with Encryption</button><br /><br />
      <button onClick={fetchNormalData} style={{backgroundColor:'blue',color: 'white'}}>start data transfer Normally</button>
    </>
  )
}

export default App

