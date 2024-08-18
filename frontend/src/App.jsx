import { encryptApi, setClientConfig } from 'encryption-npm-package';
import './App.css'

function App() {

  let config = {
    jwtSecret: 'qwertyuiopasdfghjklzxcvbnmsdfghj',
    client: {
      baseUrl: 'http://localhost:5000',
      requestLogs: true,
      responseLogs: true,
      withCredentials: true,
    },
  };



  setClientConfig(config);

  const fetchNormalData = async () => {
    const response = await encryptApi.post('http://localhost:5000/test', { count: 1 })
    console.log(response.data);
  }

  const fetchEncryptData = async () => {
    const response = await encryptApi.post('http://localhost:5000/test', { count: 1 })
    console.log(response.data);
  }

  return (
    <>
      <button onClick={fetchEncryptData}>test start</button>
      <button onClick={fetchEncryptData}>test start</button>
    </>
  )
}

export default App

