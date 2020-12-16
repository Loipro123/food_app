import {createSelector} from 'reselect';

const footerSelector = state => state.footer

export const footerDataSelector = createSelector(
    [footerSelector],
    mainData => mainData.footer_data
)