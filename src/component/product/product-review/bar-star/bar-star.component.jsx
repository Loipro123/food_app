import React from 'react';
import './bar-star.styles.scss';
import {StyleBarDiv} from './bar-star.styles';
const BarStar = ({title,number,percent}) => (
    <div className='bar_star_main'>
        <span className='bar_star_title'>{title}</span>
        <div className='bar_star_body'>
            <StyleBarDiv percent={percent}/>
        </div>
        <span className='bar_star_number'>{number}</span>
    </div>
)

export default BarStar;