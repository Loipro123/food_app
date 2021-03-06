import React from 'react';
import './customer-review.styles.scss';
import FeedbackStar from '../../../reuse-component/feedback-star/feedback-star.component';
const CustomerReview = ({name,date,comment}) => (
    <div className='customer_review'>
         <FeedbackStar type='feedback_customer_review'/>
         <h5 className='customer_review_name'>{name}</h5>
         <span className='customer_review_date'>{date}</span>
         <p className='customer_review_comment'>{comment}</p>
    </div>
)

export default CustomerReview;