import {CartTypesAction} from './cart.types';

export const addToBag = (item) => ({
    type:CartTypesAction.ADD_ACTION,
    payload:item
})

export const cartHidden = () => ({
    type:CartTypesAction.CART_HIDDENT_ACTION
})

