import React from 'react';
import './popup-comment.styles.scss';
import PopupBackground from '../../component/popup-background/popup-background.component';
import WriteComment from '../../component/write-comment/write-comment.component';
const PopupComment = () => (
    <PopupBackground>
        <WriteComment/>
    </PopupBackground>
)

export default PopupComment;