import {UserActionTypes} from './user.types';


const initialUser = {
    currentUser: null,
    user_hidden: false
}
export const userReducer = (state = initialUser, action) => {
    switch(action.type){
        case UserActionTypes.USER_INFO:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.USER_HIDDEN:
            return {
                ...state,
                user_hidden: !state.user_hidden
            }
        case UserActionTypes.USER_RESET:
            return {
                currentUser: null,
                user_hidden: false
            }
        default:
            return {
                ...state
            };
    }
}