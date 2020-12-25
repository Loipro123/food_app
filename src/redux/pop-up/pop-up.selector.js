import {createSelector} from 'reselect';

const popupData = state => state.popup

const productData = createSelector(
    [popupData],
    mainData => mainData.product_pop
)

export const hiddenPopupSelecter = createSelector(
    [productData],
    product => product.hidden
)

export const productPopupSelecter = createSelector(
    [productData],
    productMain => productMain.product
)