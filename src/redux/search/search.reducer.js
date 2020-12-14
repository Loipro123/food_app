import {search_data} from './search.data';
import {searchActionTypes} from './search.types';
import {findSearchArray} from './search.untils';
const INITIAL_STATE = {
    data: search_data,
    name: '',
    searchData: []
}

export const searchReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case searchActionTypes.ONCHANGE_ACTION:
            return {
                ...state,
                name: action.payload,
                searchData: findSearchArray(state.data,action.payload)
            }
        case searchActionTypes.CLEAN_ACTION:
            return {
                ...state,
                name: '',
                searchData: []
            }
        default:
            return{
                ...state
            }
    }
}