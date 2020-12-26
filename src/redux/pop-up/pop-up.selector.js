import {createSelector} from 'reselect';

const popupData = state => state.popup

const productData = createSelector(
    [popupData],
    mainData => mainData.product_pop
)
const commentData = createSelector(
    [popupData],
    mainData => mainData.comment_pop
)
export const hiddenPopupSelecter = createSelector(
    [productData],
    product => product.hidden
)

export const productPopupSelecter = createSelector(
    [productData],
    productMain => productMain.product
)
export const hiddenCommentSelecter = createSelector(
    [commentData],
    comment => comment.hidden
)

export const productCommentSelecter = createSelector(
    [commentData],
    commentMain => commentMain.product
)