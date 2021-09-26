import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./details.JSON')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    const handleCart = (country) => {
        const newCart = [...cart, country];
        setCart(newCart);
        // console.log(country.capital);
    }
    return (
        <div className='details-container'>
            <div className='country-container'>
                {/* <h2>Countries: {countries.length}</h2> */}
                {
                    countries.map(country =>
                        <CountryDetails
                        key={country.capital}
                        country={country}
                        handleCart={handleCart}
                    ></CountryDetails>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Country;
