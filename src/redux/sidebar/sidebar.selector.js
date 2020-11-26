import {createSelector} from 'reselect';

const sidebarSelector = state => state.sidebar

export const list_foodSelector = createSelector(
    [sidebarSelector],
    sidebar => sidebar.list_food
)