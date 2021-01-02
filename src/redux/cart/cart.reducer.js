import {CartTypesAction} from './cart.types';
import {removeCart,incraseCart,decreaseCart} from './cart.untils';
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
        case CartTypesAction.REMOVE_CART_ACTION:
            return{
                ...state,
                cart_list: removeCart(state.cart_list,action.payload)
            }
        case CartTypesAction.INCREASE_CART_ACTION:
            return{
                ...state,
                cart_list: incraseCart(state.cart_list,action.payload)
            }
        case CartTypesAction.DECREASE_CART_ACTION:
            return{
                ...state,
                cart_list: decreaseCart(state.cart_list,action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

