import React from 'react';
import './slide-show.styles.scss';

const SlideShow = ({urlImage,price,title}) => (
    <div className='slideshow_main'>
         <div className='slideshow_body'
         style={
            {
                backgroundImage: `url(${urlImage})`
            }
        }
         ></div>
         <div className='slideshow_footer'>
            <span className='slideshow_title'>{title}</span>
            <span className='slideshow_title'>${price}</span>
         </div>
    </div>
)

export default SlideShow;