import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CountryDetails.css'

const CountryDetails = (props) => {
    console.log(props.country);
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, capital, img, price,rating,days } = props.country;
    return (
        <div className='countryDetails-container'>

            <img src={img} alt="" />
            <h4 className='destination'>Destination: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Package: {days}</p>
            <h5>Price: ${price}</h5>
            <p>Rating: {rating}</p>
            <button
                onClick={() => props.handleCart(props.country)}
                className='cart-btn'>
                {element}add to cart</button>
        </div>
    );
};

export default CountryDetails;