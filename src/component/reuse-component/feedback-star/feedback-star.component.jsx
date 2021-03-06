import React from 'react';
import './feedback-star.styles.scss';

const FeedbackStar = ({type}) => (
    <div className={`${type}`}>
         <div className='star'>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star "></span>
         </div>
         <h3 className='star_count'>14 reviews</h3>
    </div>
)

export default FeedbackStar;