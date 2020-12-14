import React from 'react';
import './product-page.styles.scss';
import {connect} from 'react-redux';
import {productSelector} from  '../../redux/directory/food.selector';
import {createStructuredSelector} from 'reselect';
import ProductInformation from '../../component/product-information/product-information.component';
import FeedbackStar from '../../component/feedback-star/feedback-star.component';
import BarStar from '../../component/bar-star/bar-star.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import CustomerReview from '../../component/customer-review/customer-review.component'
const ProductPage = ({item}) => {
    const {urlImage,price,title} = item

    return (
        <div className='product_page'>
            <div className='product_main'>
                <div className='product_image' style={
                    {
                        backgroundImage: `url(${urlImage})`
                    }
                }></div>
                {
                    <ProductInformation price={price} title={title}/>
                }
            </div>
            <div className='product_review'>
                <div className='product_review_header'>
                      <div className='review_header_left'></div>
                      <span className='review_header_title'>Review</span>
                      <div className='review_header_left'></div>
                </div>
                <div className='product_review_main'>
                    <div className='product_review_feedback'>
                            <FeedbackStar type='product_review_star'/>
                            <BarStar title='5 stars' percent='50%' number='50'/>
                            <BarStar title='4 stars' percent='45%' number='45'/>
                            <BarStar title='3 stars' percent='3%' number='3'/>
                            <BarStar title='2 stars' percent='1%' number='1'/>
                            <BarStar title='1 stars' percent='1%' number='1'/>
                    </div>
                    <div className='product_review_button'>
                            <CustomButton type='product_review_btn'>Write a review</CustomButton>
                    </div>
                </div>
                <h3 className='product_review_customer'>
                    100 Customer Reviews
                </h3>
                <CustomerReview name='Loi Le' date='12-20-2020' comment='This is the best food I ever tried'/>
                <CustomerReview name='Loi Le' date='12-20-2020' comment='This is the best food I ever tried'/>
                <CustomerReview name='Loi Le' date='12-20-2020' comment='This is the best food I ever tried'/>
                <CustomerReview name='Loi Le' date='12-20-2020' comment='This is the best food I ever tried'/>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    item: productSelector
})

export default connect(mapStateToProps)(ProductPage);