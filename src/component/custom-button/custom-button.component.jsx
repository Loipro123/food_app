import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,type}) => (
    <button className = {`${type} custom-button`}>{children.toUpperCase()}</button>
);

export default CustomButton;