import React from 'react';
import './sidebar-sub.styles.scss';
import {ReactComponent as Target} from '../../icon/target.svg';
import {connect} from 'react-redux';
// import {FocusSidebar} from '../../redux/sidebar/sidebar.action';
import {withRouter} from 'react-router-dom';
const SidebarSub = ({item,history}) => {
    const {name,forcus,linkUrl} = item;
    return (
        <div className={`${forcus===true ? 'changeBack ': null} sidebar-sub`} onClick={()=> 
           { 
            //    forcusSidebar(id,title)
            history.push(`/${linkUrl}`)}
        }
        
        >
            <Target className='target'/>
            <span className='sub-title'>{name}</span>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     forcusSidebar: (itemId,itemName) => dispatch(FocusSidebar(itemId,itemName))
// })
export default withRouter(connect(null,null)(SidebarSub));