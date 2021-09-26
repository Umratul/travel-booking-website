import React from 'react';
import './CountryDetails.css'

const CountryDetails = (props) => {
    console.log(props.country);
    const { country, capital, img, price,details } = props.country;
    return (
        <div className='countryDetails-container'>

            <img src={img} alt="" />
            <h4>{country}</h4>
            <h4>{capital}</h4>
            <p>Price: {price}</p>
            <button className='cart-btn'>add to cart</button>

        </div>
    );
};

export default CountryDetails;