import React from 'react';
import './product-detail.styles.scss';

const ProductDetail = ({title}) => (
    <div className='product_detail'>
          <div className='product_detail_content'>
            <span className='product_detail_arrow'>&#10094;</span>
            <span className='product_detail_title'>{title}</span>
          </div>
    </div>
)

export default ProductDetail;