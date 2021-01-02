import React from 'react';
import './mainfood-list.styles.scss';
import CartItem from '../../component/card-item/card-item.component';
import {connect} from 'react-redux';
import {mainfoodSelector} from '../../redux/directory/food.selector';
const MainFoodList = ({itemsList}) => {
    return (
        <div className='subfood_list'> 
        <h1>{itemsList.title}</h1>
        <div className='subItems_list'>
            {
              itemsList.items.map(({items}) => items.map((item)=> <CartItem key={item.id} item={item}/>))
            }
        </div>
   </div>
 )};
 
 const mapStateToProps = (state,ownProps) => ({
   itemsList: mainfoodSelector(ownProps.match.params.mainfoodId)(state)
 })
 export default connect(mapStateToProps)(MainFoodList);