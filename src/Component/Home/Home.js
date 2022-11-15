import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import '../Home/Home.css'
const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])
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
};

export default Home;