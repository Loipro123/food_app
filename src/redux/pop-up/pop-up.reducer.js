import {popupTypesAction} from './pop-up.types';
const INITIAL_DATA = {
    product_pop: {
        hidden: false,
        product: null
    },
    comment_pop:  {
        hidden:false,
        product: null
    }
}

export const popupReducer = (state=INITIAL_DATA,action) => {
    switch(action.type){
        case popupTypesAction.OPEN_ACTION:
            return{
                ...state,
                product_pop:{
                    hidden: true,
                    product: action.payload
                }
            }
        case popupTypesAction.CLOSE_ACTION: 
             return {
                 ...state,
                 product_pop: {
                     hidden: false,
                     propduct: null
                 }
             }
        case popupTypesAction.OPEN_COMMENT_ACTION:
            return{
                    ...state,
                    comment_pop:{
                        hidden: true,
                        product: action.payload
                    }
                }
        case popupTypesAction.CLOSE_COMMENT_ACTION: 
            return {
                     ...state,
                     comment_pop: {
                         hidden: false,
                         propduct: null
                     }
                 }
        default:
            return {
                ...state
            }
    }
}