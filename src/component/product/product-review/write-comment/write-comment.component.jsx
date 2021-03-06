import React from 'react';
import './write-comment.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {productCommentSelecter} from '../../../../redux/pop-up/pop-up.selector';
import {closeComment} from '../../../../redux/pop-up/pop-up.action';
import PopupHeader from '../../../reuse-component/popup-header/popup-header.component';
import FeedbackStar from '../../../reuse-component/feedback-star/feedback-star.component';
import CustomButton from '../../../reuse-component/custom-button/custom-button.component';
const WriteComment = ({product,close_comment}) => (
    <div className='write_comment'>
        <PopupHeader title='Write a Review' handleClick={()=> {close_comment()}}/>
        <div className='write_body'>
            <div className='image_box'>
                <img src={product.urlImage} alt={product.title} className='img_main'/>
                <span className='image_title'>{product.title}</span>
            </div>
            <FeedbackStar type='review_star'/>
            <div className='review_detail'>
                <span>Customer Name: Loi Le</span>
                <textarea placeholder="Write review here!" className='review_are'/>
            </div>
            <CustomButton type='check'>Submit Review</CustomButton>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    close_comment: () => dispatch(closeComment())
})
const mapStateToProps = createStructuredSelector({
    product: productCommentSelecter
})
export default connect(mapStateToProps,mapDispatchToProps)(WriteComment);