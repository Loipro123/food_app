import React from 'react';
import './main-page.styles.scss';
import {main_data} from './main-page.data';
import MainItems from '../../component/main-item/main-items/main-items.component';

const MainPage = ()=> (
    <div className='main_page'>
        <h1>Menu</h1>
        {
            main_data.map(({id,...otherProps}) => <MainItems key={id} {...otherProps}/>)
        }
    </div>
)


export default MainPage;