import React from 'react';
import './popup-product.styles.scss';
import AddToBag from '../../component/add-to-bag/add-to-bag.component';
import PopupBackground from '../../component/popup-background/popup-background.component';

const PopupProduct = () => (
    <PopupBackground>
        <AddToBag/>        
    </PopupBackground>
);

export default PopupProduct;