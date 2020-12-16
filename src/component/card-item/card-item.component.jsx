import React from 'react';
import './card-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FeedbackStar from '../feedback-star/feedback-star.component';
import {connect} from 'react-redux';
import {ProductAccess} from '../../redux/directory/food.action';
import {withRouter} from 'react-router-dom';

const CardItem = ({urlImage,urlLink,title,price,accessProduct,history}) => {
    const item = {
        title,
        price,
        urlLink,
        urlImage
    }
    const handleClick = (item) => {
        accessProduct(item)
        history.push(`/${urlLink}`)
    }
    return (
        <div className='card_item'>
            <div className='background_box'>
                <div className='card_background'
                style={
                    {
                        backgroundImage: `url(${urlImage})`
                    }
                }></div>
                {
                    <FeedbackStar type='star_card'/>
                }
                <CustomButton type='order' className='main_order' onClick={()=> handleClick(item)}>Order</CustomButton>
            </div>
    
           <div className='card_footer'>
                <span>{title}</span>
                <span>${price}</span>
           </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    accessProduct: items => dispatch(ProductAccess(items))
})


export default withRouter(connect(null,mapDispatchToProps)(CardItem));