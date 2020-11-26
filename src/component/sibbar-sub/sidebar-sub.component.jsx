import React from 'react';
import './sidebar-sub.styles.scss';
import {ReactComponent as Target} from '../../icon/target.svg';
import {connect} from 'react-redux';
import {FocusSidebar} from '../../redux/sidebar/sidebar.action';
const SidebarSub = ({item,title,forcusSidebar}) => {
    const {name,id,forcus} = item;
    return (
        <div className={`${forcus===true ? 'changeBack ': null} sidebar-sub`} onClick={()=> forcusSidebar(id,title)}>
            <Target className='target'/>
            <span className='sub-title'>{name}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    forcusSidebar: (itemId,itemName) => dispatch(FocusSidebar(itemId,itemName))
})
export default connect(null,mapDispatchToProps)(SidebarSub);