
export const removeCart = (cartList,id) => {
    return cartList.filter(item => item.id !== id)
}

export const decreaseCart = (cartList,id) => {
    const itemFind = cartList.find(item => item.id === id);
    if(!itemFind) return -1;
    if (itemFind.amount === 1) {
        return cartList.filter(item => item.id !== id);
    }
    return cartList.map(item => {
        if (item.id === id) {
            return {
                ...item,
                amount: item.amount - 1
            }
        }else{
            return {
                ...item
            }
        }
    })

}

export const incraseCart = (cartList,id) => {
    return cartList.map(item => {
        if (item.id === id) {
            return {
                ...item,
                amount: item.amount + 1
            }
        }else{
            return {
                ...item
            }
        }
    })
}