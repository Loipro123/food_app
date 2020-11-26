import React from 'react';
import './sidebar-header.styles.scss';
import {ReactComponent as DownArrow} from '../../icon/down-arrow.svg';
import {ReactComponent as UpArrow} from '../../icon/up-arrow.svg';
import {connect} from 'react-redux';
import {ToogleSidebar} from '../../redux/sidebar/sidebar.action';
import SidebarSub from '../sibbar-sub/sidebar-sub.component';
const SidebarHeader = ({item,tooggleBar}) => {
    const {title,items,id,hidden} = item;
    return(
    <div className='side'>
         <div className='title-bar' onClick={()=> {tooggleBar(id)}}>
            <span className='title'>{title}</span>
            {hidden ? <DownArrow className='title-icon'/>: <UpArrow className='title-icon'/>}
         </div>
         {
             hidden === false ? items.map(item => <SidebarSub key={item.id} item={item} title={title}/>) : null
         }
    </div>
)};

const mapDispatchToProps = dispatch => ({
    tooggleBar: itemId => dispatch(ToogleSidebar(itemId))
})
export default connect(null,mapDispatchToProps)(SidebarHeader);