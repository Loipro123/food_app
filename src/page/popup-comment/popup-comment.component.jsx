import React from 'react';
import './popup-comment.styles.scss';
import PopupBackground from '../../component/reuse-component/popup-background/popup-background.component';
import WriteComment from '../../component/product/product-review/write-comment/write-comment.component';
const PopupComment = () => (
    <PopupBackground>
        <WriteComment/>
    </PopupBackground>
)

export default PopupComment;