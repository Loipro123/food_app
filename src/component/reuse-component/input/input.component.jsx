import React from 'react';
import './input.styles.scss';

const Input = ({lable,icon,...otherProperties}) => (
    <div className='group'>
         <input value={otherProperties.value} onChange={otherProperties.handleChange} className='input-field' {...otherProperties} required/>
         <label className={`lable ${otherProperties.value.length ? 'lable_focus' : ''}`} required>{lable}</label>
         <i className={`${icon} icon`}/>
         <span className='input-forcus'></span>
    </div>
)

export default Input;