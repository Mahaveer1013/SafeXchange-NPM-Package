import { encryptApi, setClientConfig, api } from 'safexchange';
import './App.css';

function App() {
  api.defaults.baseURL = 'http://localhost:5000';
  encryptApi.defaults.baseURL = 'http://localhost:5000';
  
  let config = {
    jwtSecret: 'qwertytresdcvbnjuytrdfgoiuytrewsxcvbn',
    client: {
      requestLogs: true,
      responseLogs: true,
    },
  };
  
  setClientConfig(config);
  
  const fetchNormalData = async () => {
    try {
      const response = await api.post('/test', { data: 'confidential data', receiver: 'ram' });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching normal data:', error);
    }
  };

  const fetchEncryptData = async () => {
    try {
      const response = await encryptApi.post('/test', { data: 'confidential data', receiver: 'ram' });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching encrypted data:', error);
    }
  };

  return (
    <>
      <button onClick={fetchEncryptData} style={{ backgroundColor: 'blue', color: 'white' }}>Start Data Transfer with Encryption</button><br /><br />
      <button onClick={fetchNormalData} style={{ backgroundColor: 'blue', color: 'white' }}>Start Data Transfer Normally</button>
    </>
  );
}

export default App;
