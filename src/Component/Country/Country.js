import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const { name, flags, population, area, region } = props.country;
    // console.log(common)
    return (
        <div className="country-grid">
            <div className='country-info'>
                
                <img src={flags.png} alt="" />
                <h4>Name: {name.common}</h4>
                <p>Area: <strong>{area}</strong></p>
                <p>Population: <strong>{population}</strong></p>
                <p>Region: <strong>{region}</strong></p>
            </div>
        </div>
    );
};

export default Country;