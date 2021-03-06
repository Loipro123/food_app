import React from 'react';
import './main-items-list.styles.scss';
import {withRouter} from 'react-router-dom';
const MainItemsList = ({urlImage,linkUrl,title,history,match}) => (
    <div className='sub_mainItems' onClick={()=> history.push(`${match.url}${linkUrl}`)}>
         <div className='sub_box'>
            <img src={urlImage} alt={title} className='subImage'/>
            <div className='box_opacity'></div>
         </div>
        <h3 className='sub_title'>{title}</h3>
    </div>
)

export default withRouter(MainItemsList);