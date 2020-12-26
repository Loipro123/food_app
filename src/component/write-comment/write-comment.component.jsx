import React from 'react';
import './write-comment.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {productCommentSelecter} from '../../redux/pop-up/pop-up.selector';
import {closeComment} from '../../redux/pop-up/pop-up.action';
import PopupHeader from '../popup-header/popup-header.component';
const WriteComment = ({product,close_comment}) => (
    <div className='write_comment'>
        <PopupHeader title='Write A Review' handleClick={()=> {close_comment()}}/>
    </div>
)

const mapDispatchToProps = dispatch => ({
    close_comment: () => dispatch(closeComment())
})
const mapStateToProps = createStructuredSelector({
    product: productCommentSelecter
})
export default connect(mapStateToProps,mapDispatchToProps)(WriteComment);