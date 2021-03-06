import React from 'react';
import './main-items.styles.scss';
import MainItemsList from '../main-items-list/main-items-list.component';
import {withRouter} from 'react-router-dom';
const MainItems = ({title,items,linkUrl,history}) => (
    <div className='main_items'> 
        <h3 className='main_title' onClick={()=> history.push(`/${linkUrl}`)}>
            {title}
        </h3>
        <div className='main_item'>
            {
                items.map(({id,...otherProps}) => <MainItemsList key={id} {...otherProps}/>)
            }
        </div>
    </div>
)

export default withRouter(MainItems);