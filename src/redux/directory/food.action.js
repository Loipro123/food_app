import {foodActionTypes} from './food.types';

export const AccesSubFood = (mainfoodId,subfoodId) => ({
    type: foodActionTypes.SUBFOOD_ACTION,
    payload: {
        mainfoodId,
        subfoodId
    }
})