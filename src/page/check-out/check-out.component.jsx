import React from 'react';
import './check-out.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {cartList} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import {priceCartList} from '../../redux/cart/cart.selector';
const CheckOut = ({cart_list,total}) => {
    return (
        <div className='checkout'>
            <div className='checkout_header'>
                <span className='checkout_header1'>Product</span>
                <span className='checkout_header2'>Quantity</span>
                <span className='checkout_header3'>Subtotal</span>
                <span className='checkout_header3'>Remove</span>
            </div>
            {cart_list.map(item => <CheckoutItem item={item} key={item.id}/>)}
            <span className='checkout_total'>Total: <b>${total}</b></span>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cart_list: cartList,
    total: priceCartList
})
export default connect(mapStateToProps)(CheckOut);