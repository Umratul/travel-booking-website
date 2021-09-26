import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const country of cart) {
        total = total + country.price;
    }
    return (
        <div>
            <h2>Booking Details</h2>
            <h5>Booked: {props.cart.length}</h5>
            <br />
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;