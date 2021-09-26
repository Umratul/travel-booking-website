import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let countryName = '';
    for (const country of cart) {
        countryName = countryName + country.name;
    }

    let total = 0;
    for (const country of cart) {
        total = total + country.price;
    }
    return (
        // section for the cart
        <div className='cart-info'>
            <h2>Booking Details</h2>
            <h5>Booked: {props.cart.length}</h5>
            <p className='country-name'>Name: {countryName}</p>
            <p>Total: ${total}</p>
            
        </div>
    );
};

export default Cart;