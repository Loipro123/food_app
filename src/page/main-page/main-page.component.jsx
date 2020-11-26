import React from 'react';
import './main-page.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {select_mainData} from '../../redux/main/main.selector';
import MainItems from '../../component/main-items/main-items.component';

const MainPage = ({list_items})=> (
    <div className='main_page'>
        <h1>Menu</h1>
        {
            list_items.map(({id,...otherProps}) => <MainItems key={id} {...otherProps}/>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    list_items: select_mainData
})
export default connect(mapStateToProps)(MainPage);