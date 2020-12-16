import {createSelector} from 'reselect';

const productSelector = state => state.product

export const slideSelector = createSelector(
    [productSelector],
    mainData => mainData.slide_data
)

export const mainDataSelector = createSelector(
    [productSelector],
    mainData => mainData.main_data
)


