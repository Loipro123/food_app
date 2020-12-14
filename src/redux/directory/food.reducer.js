import {database} from './food.data';
import {foodActionTypes} from './food.types';

const INITIAL_STATE = {
    food: database,
    product: null
}

export const foodReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case foodActionTypes.PRODUCT_ACTION:
            return {
                ...state,
                product: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

