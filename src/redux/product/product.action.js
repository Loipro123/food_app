import {productActionTypes} from './product.type';

export const productAccess = () => {
    return {
        type:productActionTypes.SLIDE_ACTION,
    }
}

export const resetSlide = () => {
    return {
        type: productActionTypes.RESET_ACTION
    }
}
