import React from 'react';
import './product-information.styles.scss';
import FeedbackStar from '../feedback-star/feedback-star.component';
import RadioButton from '../radio-button/radio-button.component';
import ProductQuantity from '../product-quantity/product-quantity.component';
import CustomButton from '../custom-button/custom-button.component';
import ProductDetail from '../product-detail/product-detail.component';
class ProductInformation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueRadio: 'Large'
        }
    }
    radioChangeHandler = (event) => {
        
        this.setState({
            valueRadio : event.target.value
        })
        
    }
    render(){
        return (
            <div className='product_information'>
                <div className='product_intro'>
                    <h3 className='product_title'>{this.props.title}</h3>
                    <div className='product_spec'>
                        <span className='product_price'>${this.props.price}</span>
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
                             <ProductQuantity quantity= '1'/>
                        </div>
                </div>
                <CustomButton type='option_button'>Add to Bag</CustomButton>
                <ProductDetail title='Product details'/>
                <ProductDetail title='Product notes'/>
            </div>
        )
    }
};

export default ProductInformation;