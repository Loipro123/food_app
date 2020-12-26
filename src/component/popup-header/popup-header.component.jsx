import React from 'react';
import './popup-header.styles.scss';

const PopupHeader = ({title,handleClick}) => (
    <div className='add_bag_header'>
            <span className='add_bag_header_title'>{title}</span>
            <span className='add_bag_close' onClick = {handleClick}>&times;</span>
    </div>
)

export default PopupHeader;