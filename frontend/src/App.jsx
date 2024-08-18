import { encryptApi, setClientConfig } from 'encryption-npm-package';
import './App.css'

function App() {

  let config = {
    jwtSecret: 'qwerty',
    client: {
      baseUrl: 'http://localhost:5000',
      requestLogs: true,
      responseLogs: true,
      withCredentials: true,
    },
  };

  

  setClientConfig(config);

  const fetchData = async () => {
    const response = await encryptApi.post('http://localhost:5000/test', { count: 1 })
    console.log(response.data);
  }

  return (
    <>
      <button onClick={fetchData}>test start</button>
    </>
  )
}

export default App