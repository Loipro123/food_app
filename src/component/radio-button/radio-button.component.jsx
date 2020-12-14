import React from 'react';
import './radio-button.styles.scss';

const RadioButton = ({label,value,isSelected,id,changed}) => (
       <div className="RadioButton">
            <input id={id} onChange={changed} value={value} type="radio" checked={isSelected} />
            <label htmlFor={id}>{label}</label>
        </div>
)


export default RadioButton;