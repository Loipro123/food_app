import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,type,onClick}) => (
    <button className = {`${type} custom-button`} onClick={onClick}>{children}</button>
);

export default CustomButton;