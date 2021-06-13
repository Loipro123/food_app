import React from 'react';
import './input.styles.scss';

const Input = ({lable,icon,handlechange,...otherProperties}) => (
    <div className='group'>
         <input value={otherProperties.value} onChange={handlechange} className='input-field' {...otherProperties} autoComplete='off' required/>
         <label className={`lable ${otherProperties.value.length ? 'lable_focus' : ''}`} required>{lable}</label>
         <i className={`${icon} icon`}/>
         <span className='input-forcus'></span>
    </div>
)

export default Input;