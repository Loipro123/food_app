import {createSelector} from 'reselect';
 
const user = state => state.user;

export const userSelector = createSelector(
    [user],
    user => user.currentUser
)

export const hiddenSelector = createSelector(
    [user],
    user => user.user_hidden
)