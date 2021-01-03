import {createSelector} from 'reselect';

const cartData = state => state.cart;


export const cartList = createSelector(
    [cartData],
    cart => cart.cart_list
);

export const amountCartList = createSelector(
    [cartList],
    cart => cart.reduce((preamount,item) => preamount + item.amount,0)
)

export const priceCartList = createSelector(
    [cartList],
    cart => cart.reduce((preamount,item) => preamount+ item.amount*item.price,0)
)

export const cartHiddenSelector = createSelector(
    [cartData],
    cart => cart.cart_hidden
)

