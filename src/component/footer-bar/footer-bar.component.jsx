import React from 'react';
import './footer-bar.styles.scss';

const FooterBar = ({title,items}) => (
   <div className='footer_bar'>
        <h6 className='footer_bar_title'>{title}</h6>
        {
            items.map(item => <span key={item.id} className='footer_bar_subtitle'>{item.name}</span>)
        }
   </div>
);

export default FooterBar