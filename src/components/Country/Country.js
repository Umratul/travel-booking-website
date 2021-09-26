import React, { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css';

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('./details.JSON')
            .then(res => res.json())
            .then(data => setCountries(data));
    },[])
    return (
        <div className='details-container'>
            <div className='country-container'>
                {/* <h2>Countries: {countries.length}</h2> */}
                {
                    countries.map(country=> <CountryDetails country={country}></CountryDetails>)
                }
            </div>
            <div className='cart-container'>
                <h2>Orderss</h2>
            </div>
        </div>
    );
};

export default Country;
