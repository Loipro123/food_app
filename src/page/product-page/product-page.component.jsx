import React from 'react';
import './product-page.styles.scss';
import {connect} from 'react-redux';
import {productSelector} from  '../../redux/directory/food.selector';
import {createStructuredSelector} from 'reselect';
import ProductInformation from '../../component/product-information/product-information.component';
import FeedbackStar from '../../component/feedback-star/feedback-star.component';
import BarStar from '../../component/bar-star/bar-star.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import CustomerReview from '../../component/customer-review/customer-review.component';
import ProductHeader from '../../component/product-header/product_header.component';
import {slideSelector} from '../../redux/product/product.selector';
import {productAccess,resetSlide} from '../../redux/product/product.action';
import SlideShow from '../../component/slide-show/slide-show.component';
import {openComment} from '../../redux/pop-up/pop-up.action';

class ProductPage extends React.Component  {
     mySlide = null
    componentWillMount() {
         this.mySlide = setInterval(this.props.slideAccess,5000);
      }
    
    componentWillUnmount() {
        this.props.resetValue();
        clearInterval(this.mySlide);
    }
   render(){

    const {urlImage} = this.props.item;
    return (
        <div className='product_page'>
            <div className='product_main'>
                <div className='product_image' style={
                    {
                        backgroundImage: `url(${urlImage})`
                    }
                }></div>
                {
                    <ProductInformation item={this.props.item}/>
                }
            </div>
            <ProductHeader title='Favorite foods'/>
            <div className='slideshow'>
                {
                    this.props.slide.map(({id,...otherProps}) => <SlideShow key={id} {...otherProps}/>)
                }
            </div>
            <ProductHeader title='Reviews'/>
            <div className='product_review'>
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
                            <CustomButton type='product_review_btn' onClick={()=> {this.props.open_comment(this.props.item)}}>Write a review</CustomButton>
                    </div>
                </div>
                <h3 className='product_review_customer'>
                    100 Customer Reviews
                </h3>
                <CustomerReview name='Down Le' date='12-20-2020' comment='This is the best food I ever tried'/>
                <CustomerReview name='John Lee' date='13-20-2020' comment="I'm either an L or XL because of large chest. An L in this sweater gave me plenty of room. It's so pretty in blue. It's a thick sweater so you will stay warm wearing it. It's an eye catcher so prepare for compliments."/>

            </div>
        </div>
    )
   }
}

const mapStateToProps = createStructuredSelector({
    item: productSelector,
    slide: slideSelector
})

const mapDispatchToProps = dispatch => ({
    slideAccess: () => dispatch(productAccess()),
    resetValue: () => dispatch(resetSlide()),
    open_comment: (item) => dispatch(openComment(item))
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);