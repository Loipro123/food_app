import React from 'react';
import './food-list.styles.scss';
import CardItem from '../../component/card-item/card-item.component';
import {connect} from 'react-redux';
import {subfoodSelector} from '../../redux/directory/food.selector';
const FoodList = ({itemsList}) => {
  return (
  <div className='subfood_list'> 
       <h1>{itemsList.title}</h1>
       <h3 className='sub_title'>{itemsList.items.title}</h3>
       <div className='subItems_list'>
           {
             itemsList.items.items.map((item) => <CardItem key={item.id} item={item}/>)
           }
       </div>
  </div>
)};

const mapStateToProps = (state,ownProps) => ({
  itemsList: subfoodSelector(ownProps.match.params.mainfoodId,ownProps.match.params.subfoodId)(state)
})
export default connect(mapStateToProps)(FoodList);