import React from 'react';
import './product-quantity.styles.scss';

const ProductQuantity = ({quantity,decrease,increase}) => (
    <div className='quantity'>
        <div className='arrow' onClick={decrease}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increase}>&#10095;</div>
    </div>
)

export default ProductQuantity;