import React from 'react';
import './product-quantity.styles.scss';

const ProductQuantity = ({quantity}) => (
    <div className='quantity'>
        <div className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'>&#10095;</div>
    </div>
)

export default ProductQuantity;