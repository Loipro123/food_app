import React from 'react';
import './checkout-item.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {removeCart,increaseCart,descreaseCart} from '../../redux/cart/cart.action';
import ItemDetail from '../item-detail/item-detail.component';
import ProductQuantity from '../product-quantity/product-quantity.component';
const CheckoutItem = ({item,removeItem,increaseItem,decreaseItem}) => {
    const {amount,price,id} = item;
    const subAmount = price * amount;
    return(
        <div className='checkout_item'>
            <div className='checkout_item1'>
                <ItemDetail item={item}/>
            </div>
            <div className='checkout_item2'>
                <ProductQuantity decrease={() => {decreaseItem(id)}} increase={()=> {increaseItem(id)}} quantity={amount}/>
            </div>
            <span className='checkout_item3'>
                ${subAmount}
            </span>
            <span className='checkout_item4'>
                <i className="fa fa-close" onClick={()=> {
                    removeItem(id)
                }}></i>
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeCart(id)),
    increaseItem : (id) => dispatch(increaseCart(id)),
    decreaseItem: (id) => dispatch(descreaseCart(id))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);