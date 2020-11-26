import main_data from './main.data';

const INITIAL_STATE = {
    main_data: main_data
}

export const mainReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}

