import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const { name } = useParams();
    const [countryInfo, setCountryInfo] = useState([])
  useEffect(() => {
      const url = `https://restcountries.com/v3.1/name/${name}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setCountryInfo(data))
      
  }, [])
    return(
        <div>
           <h4>Country: {name}</h4>
           <h4>Official Name: {countryInfo.map(country => <p>{country.name.official}</p>)}</h4>
            <h4>Language: {countryInfo.map(country => <p>{country.area}</p>)}</h4>
        </div>
    )
};

export default About;
