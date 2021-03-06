import React from 'react';
import './add-to-bag.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {productPopupSelecter} from '../../../../redux/pop-up/pop-up.selector';
import {closePopup} from '../../../../redux/pop-up/pop-up.action';
import ItemDetail from '../item-detail/item-detail.component';
import TotalAmount from '../../../reuse-component/total-amount/total-amount.component';
import CustomButton from '../../../reuse-component/custom-button/custom-button.component';
import PopupHeader from '../../../reuse-component/popup-header/popup-header.component';
import {amountCartList,priceCartList} from '../../../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
const AddToBag = ({close_popup,product,price,amount,history}) => {
    return (
    <div className='add_to_bag'>
        <PopupHeader title='Added To Your Bag Successfully' handleClick = { ()=> {close_popup()}} type='add_bag'/>
        <ItemDetail item={product}/>
        <div className='add_bag_footer'>
             <TotalAmount amount={amount} price={price}/>
             <div className='add_bag_btn'>
                   <CustomButton type='keep' onClick={()=> {
                       close_popup();
                       history.push('/');
                   }}>Keep Shopping</CustomButton>
                   <CustomButton type='check' onClick={()=> {
                       close_popup();
                       history.push('/checkout')
                   }}>Check Out</CustomButton>
             </div>
        </div>
    </div>
    
)}

const mapDispatchToProps = dispatch => ({
    close_popup: () => dispatch(closePopup())
})
const mapStateToProps = createStructuredSelector({
    product: productPopupSelecter,
    amount: amountCartList,
    price: priceCartList
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddToBag));