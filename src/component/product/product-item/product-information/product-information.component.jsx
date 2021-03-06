import React from 'react';
import './product-information.styles.scss';
import {connect} from 'react-redux';
import FeedbackStar from '../../../reuse-component/feedback-star/feedback-star.component';
import RadioButton from '../radio-button/radio-button.component';
import ProductQuantity from '../../../reuse-component/product-quantity/product-quantity.component';
import CustomButton from '../../../reuse-component/custom-button/custom-button.component';
import ProductDetail from '../product-detail/product-detail.component';
import {openPopup} from '../../../../redux/pop-up/pop-up.action';
import {addToBag} from '../../../../redux/cart/cart.action';

class ProductInformation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueRadio: 'Large',
            amount: 1
        }
    }
    radioChangeHandler = (event) => {
        
        this.setState({
            valueRadio : event.target.value
        })
        
    }
    increaseClick = () => {
        this.setState((preState) => ({
            amount: preState.amount +1
        }))
    }
    decreaseClick = () => {
        if(this.state.amount>1){
            this.setState((preState) => ({
                amount: preState.amount -1
            }))
        }   
    }
    render(){
        return (
            <div className='product_information'>
                <div className='product_intro'>
                    <h3 className='product_title'>{this.props.item.title}</h3>
                    <div className='product_spec'>
                        <span className='product_price'>${this.props.item.price}</span>
                        {
                            <FeedbackStar type='product_star'/>
                        }
                    </div>
                </div>
                <div className='product_option'>
                       <span className='product_option_title'>Size</span>
                       <div className='product_options'>
                           <RadioButton 
                                changed={this.radioChangeHandler } 
                                id="1" 
                                isSelected={ this.state.valueRadio === "Small" } 
                                label="Small" 
                                value="Small" 
                            />
                            <RadioButton 
                                changed={this.radioChangeHandler } 
                                id="2" 
                                isSelected={ this.state.valueRadio === "Large" } 
                                label="Large" 
                                value="Large" 
                            />
                        </div>
                        <div className='product_option_amount'>
                             <span className='product_option_title'>Quantity</span>
                             <ProductQuantity quantity= {this.state.amount} increase={this.increaseClick} decrease={this.decreaseClick}/>
                        </div>
                </div>
                <CustomButton type='option_button' onClick={ () => { 
                    this.props.add_product({...this.props.item,...this.state})
                    this.props.open_popup({...this.props.item,...this.state})
                }}>Add to Bag</CustomButton>
                <ProductDetail title='Product details'/>
                <ProductDetail title='Product notes'/>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    open_popup: (item) => dispatch(openPopup(item)),
    add_product: (item) => dispatch(addToBag(item))
})
export default connect(null,mapDispatchToProps)(ProductInformation);