import React from 'react';
import './sidebar-header.styles.scss';
import {ReactComponent as DownArrow} from '../../icon/down-arrow.svg';
import {ReactComponent as UpArrow} from '../../icon/up-arrow.svg';
import {connect} from 'react-redux';
import {ToogleSidebar} from '../../redux/sidebar/sidebar.action';
import SidebarSub from '../sibbar-sub/sidebar-sub.component';
import {withRouter} from 'react-router-dom';
const SidebarHeader = ({item,tooggleBar,history}) => {
    const {title,items,id,hidden,linkUrl} = item;
    return(
    <div className='side'>
         <div className='title-bar' onClick={()=> {
             tooggleBar(id)
             history.push(`/${linkUrl}`)
        }}>
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
export default withRouter(connect(null,mapDispatchToProps)(SidebarHeader));