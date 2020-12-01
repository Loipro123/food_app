import React from 'react';
import './card-item.styles.scss';

const CardItem = ({urlImage,urlLink,title,price}) => (
    <div className='card_item'>
        <div className='card_background'
            style={
                {
                    backgroundImage: `url(${urlImage})`
                }
            }></div>

       <div className='card_footer'>
            <span>{title}</span>
            <span>${price}</span>
       </div>
    </div>
)

export default CardItem;