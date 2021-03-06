import React from 'react';
import './popup-header.styles.scss';

const PopupHeader = ({title,handleClick,type}) => (
    <div className={`add_bag_header ${type}`}>
            <span className='add_bag_header_title'>{title}</span>
            <span className='add_bag_close' onClick = {handleClick}>&times;</span>
    </div>
)

export default PopupHeader;