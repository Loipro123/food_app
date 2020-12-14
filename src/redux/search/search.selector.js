import {createSelector} from 'reselect';

const mainArraySelector = state => state.search

export const searchArraySelector = createSelector(
    [mainArraySelector],
    mainArray => mainArray.searchData
)

export const inputValueSelector = createSelector(
    [mainArraySelector],
    mainArray => mainArray.name
)