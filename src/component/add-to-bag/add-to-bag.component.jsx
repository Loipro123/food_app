import React from 'react';
import './add-to-bag.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {productPopupSelecter} from '../../redux/pop-up/pop-up.selector';
import {closePopup} from '../../redux/pop-up/pop-up.action';
import ItemDetail from '../../component/item-detail/item-detail.component';
import TotalAmount from '../total-amount/total-amount.component';
import CustomButton from '../custom-button/custom-button.component';
import PopupHeader from '../popup-header/popup-header.component';
const AddToBag = ({close_popup,product}) => {
    return (
    <div className='add_to_bag'>
        <PopupHeader title='Added To Your Bag' handleClick = { ()=> {close_popup()}}/>
        <ItemDetail item={product}/>
        <div className='add_bag_footer'>
             <TotalAmount amount='3' price='120.00'/>
             <div className='add_bag_btn'>
                   <CustomButton type='keep'>Keep Shopping</CustomButton>
                   <CustomButton type='check'>Check Out</CustomButton>
             </div>
        </div>
    </div>
    
)}

const mapDispatchToProps = dispatch => ({
    close_popup: () => dispatch(closePopup())
})
const mapStateToProps = createStructuredSelector({
    product: productPopupSelecter
})
export default connect(mapStateToProps,mapDispatchToProps)(AddToBag);