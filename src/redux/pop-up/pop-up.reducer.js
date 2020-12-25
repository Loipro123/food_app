import {popupTypesAction} from './pop-up.types';
const INITIAL_DATA = {
    product_pop: {
        hidden: false,
        propduct: null
    },
    comment_pop:  {
        hidden:false
    }
}

export const popupReducer = (state=INITIAL_DATA,action) => {
    switch(action.type){
        case popupTypesAction.OPEN_ACTION:
            return{
                ...state,
                product_pop:{
                    hidden: true,
                    propduct: action.payload
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
        default:
            return {
                ...state
            }
    }
}