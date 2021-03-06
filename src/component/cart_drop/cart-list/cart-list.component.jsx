import React from 'react';
import './cart-list.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {cartList} from '../../../redux/cart/cart.selector';
import ItemDetail from '../../product/product-item/item-detail/item-detail.component';
import {amountCartList,priceCartList} from '../../../redux/cart/cart.selector';
import TotalAmount from '../../reuse-component/total-amount/total-amount.component';
import CustomButton from '../../reuse-component/custom-button/custom-button.component';
import {withRouter} from 'react-router-dom';
import {cartHidden} from '../../../redux/cart/cart.action';
const CartList = ({cart_list,price,amount,history,cart_hidden}) => {
    return (
    <div className='cart_list'>
         <div className='cart_list_main'>
             {cart_list.map(item => <ItemDetail key={item.id} item={item}/>)}
         </div>
         <div className='cart_list_footer'>
             <TotalAmount amount={amount} price={price}/>
             <CustomButton type='check' onClick={()=> {
                 cart_hidden();
                 history.push('/checkout');
             }}>Check Out</CustomButton>
         </div>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cart_list: cartList,
    amount: amountCartList,
    price: priceCartList
})

const mapDispatchToProps = dispatch => ({
    cart_hidden: () => dispatch(cartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartList));