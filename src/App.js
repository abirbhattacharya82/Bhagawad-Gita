import axios from 'axios';
import Header from './Components/Header/Header'
import Subheader from './Components/Subheader/Subheader'
import Result from './Components/Result/Result'
function App() {
  const options = {
    method: 'GET',
    url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
    params: {limit: '18'},
    headers: {
      'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div className="App">
      <Header></Header>
      <Subheader></Subheader>
      <Result></Result>
    </div>
  );
}

export default App;
