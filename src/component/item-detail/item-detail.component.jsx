import React from 'react';
import './item-detail.styles.scss';

const ItemDetail = ({item: {urlImage,price,title}}) => (
    <div className='item_detail'>
        <div className='itemImage_box'>
             <img src={urlImage} alt={title} className='item_image'/>
        </div>
        <div className='item_info'>
             <span className='item_title'>{title}</span>
             <div className='item_column'>
                  <span className='item_column_text'>Price :</span>
                  <span className='item_column_text'>${price}</span>
             </div>
             <div className='item_column'>
                  <span className='item_column_text'>Size :</span>
                  <span className='item_column_text'>Large</span>
             </div>
             <div className='item_column'>
                  <span className='item_column_text'>Quantity :</span>
                  <span className='item_column_text'>3</span>
             </div>
        </div>
    </div>
)


export default ItemDetail;