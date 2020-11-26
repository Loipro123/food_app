import React from 'react';
import './main-items.styles.scss';
import MainItemsList from '../main-items-list/main-items-list.component';
const MainItems = ({title,items}) => (
    <div className='main_items'> 
        <h3 className='main_title'>
            {title}
        </h3>
        <div className='main_item'>
            {
                items.map(({id,...otherProps}) => <MainItemsList key={id} {...otherProps}/>)
            }
        </div>
    </div>
)

export default MainItems;