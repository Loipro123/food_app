import {database} from './food.data';
// import {foodActionTypes} from './food.types';

const INITIAL_STATE = {
    food: database
}

export const foodReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        default: 
        return {
            ...state
        }
    }
}

