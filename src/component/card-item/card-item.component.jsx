import React from 'react';
import './card-item.styles.scss';
import CustomButton from '../reuse-component/custom-button/custom-button.component';
import FeedbackStar from '../reuse-component/feedback-star/feedback-star.component';
import {connect} from 'react-redux';
import {ProductAccess} from '../../redux/directory/food.action';
import {withRouter} from 'react-router-dom';


const CardItem = ({item,accessProduct,history}) => {
    const guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    const itemPass = {...item, id: guid()}
    const {urlImage,urlLink,title,price} = item;
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
                <CustomButton type='order' className='main_order' onClick={()=> handleClick(itemPass)}>Order</CustomButton>
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