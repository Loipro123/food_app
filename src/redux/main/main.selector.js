import {createSelector} from 'reselect';

const mainData = state => state.mainData;

export const select_mainData = createSelector(
    [mainData],
    mainData => mainData.main_data
)
