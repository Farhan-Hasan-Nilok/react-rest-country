
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Component/Country/Country';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
    })
  },[])
  return (
   <div>
    <h3 className='total'>Total Country: {countries.length}</h3>
      <div className='country-grid'>
      {
          countries.map(country => <Country country={country}></Country>)
      }
    </div>
   </div>
  );
}

export default App;
