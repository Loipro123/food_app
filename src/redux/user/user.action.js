import {UserActionTypes} from './user.types';
export const setUserInfor = user => {
    return {
        type: UserActionTypes.USER_INFO,
        payload: user
    }
}

export const setUserHidden = () => {
    return {
        type: UserActionTypes.USER_HIDDEN
    }
}

export const resetUser = () => {
    return{
        type: UserActionTypes.USER_RESET
    }
}