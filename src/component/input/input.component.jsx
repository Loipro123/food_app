import React from 'react';
import './input.styles.scss';

const Input = ({lable,icon,...otherProperties}) => (
    <div className='group'>
         <input {...otherProperties} className='input-field'/>
         <label className='lable'>{lable}</label>
         <i className={`${icon} icon`}/>
         <span className='input-forcus'></span>
    </div>
)

export default Input;