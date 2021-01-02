import {CartTypesAction} from './cart.types';

export const addToBag = (item) => ({
    type:CartTypesAction.ADD_ACTION,
    payload:item
})

export const cartHidden = () => ({
    type:CartTypesAction.CART_HIDDENT_ACTION
})

export const removeCart = (idItem) => ({
    type:CartTypesAction.REMOVE_CART_ACTION,
    payload: idItem
})

export const increaseCart = (idItem) => ({
    type: CartTypesAction.INCREASE_CART_ACTION,
    payload: idItem
})

export const descreaseCart = (idItem) => ({
    type: CartTypesAction.DECREASE_CART_ACTION,
    payload: idItem
})