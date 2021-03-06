import React from 'react';
import './total-amount.styles.scss';

const TotalAmount = ({price,amount}) => (
    <div className='total_amount'>
        <span><b>{amount}</b> items in bag</span>
        <span>Subtotal: <b>${price}</b></span>
    </div>
)

export default TotalAmount;