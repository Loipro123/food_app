import React from 'react';
import './product_header.styles.scss';

const ProductHeader = ({title}) => (
    <div className='product_review_header'>
        <div className='review_header_left'></div>
        <span className='review_header_title'>{title}</span>
        <div className='review_header_left'></div>
    </div>
)

export default ProductHeader;