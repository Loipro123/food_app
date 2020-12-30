import {CartTypesAction} from './cart.types';

const INITIAL_STATE = {
    cart_list: [],
    cart_hidden: false
}

export const cartReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CartTypesAction.ADD_ACTION:
            return{
                cart_list: [...state.cart_list,action.payload]
            }
        case CartTypesAction.CART_HIDDENT_ACTION:
            return{
                ...state,
                cart_hidden: !state.cart_hidden
            }
        default:
            return {
                ...state
            }
    }
}

