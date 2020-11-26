import React from 'react';
import './main-items-list.styles.scss';

const MainItemsList = ({urlImage,urlLink,title}) => (
    <div className='sub_mainItems'>
         <div className='sub_box'>
            <img src={urlImage} className='subImage'/>
            <div className='box_opacity'></div>
         </div>
        <h3 className='sub_title'>{title}</h3>
    </div>
)

export default MainItemsList;