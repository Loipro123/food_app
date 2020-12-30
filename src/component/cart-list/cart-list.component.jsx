import React from 'react';
import './cart-list.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {cartList} from '../../redux/cart/cart.selector';
import ItemDetail from '../../component/item-detail/item-detail.component';
import {amountCartList,priceCartList} from '../../redux/cart/cart.selector';
import TotalAmount from '../total-amount/total-amount.component';
import CustomButton from '../custom-button/custom-button.component';
const CartList = ({cart_list,price,amount}) => (
    <div className='cart_list'>
         <div className='cart_list_main'>
             {cart_list.map(item => <ItemDetail item={item}/>)}
         </div>
         <div className='cart_list_footer'>
             <TotalAmount amount={amount} price={price}/>
             <CustomButton type='check'>Check Out</CustomButton>
         </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cart_list: cartList,
    amount: amountCartList,
    price: priceCartList
})

export default connect(mapStateToProps)(CartList);