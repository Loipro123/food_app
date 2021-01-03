import {search_data} from './search.data';
import {searchActionTypes} from './search.types';
import {findSearchArray} from './search.untils';
const INITIAL_STATE = {
    data: search_data,
    name: '',
    searchData: [],
    searchHidden: false
}

export const searchReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case searchActionTypes.ONCHANGE_ACTION:
            return {
                ...state,
                name: action.payload,
                searchData: findSearchArray(state.data,action.payload),
                searchHidden: true
            }
        case searchActionTypes.CLEAN_ACTION:
            return {
                ...state,
                name: '',
                searchData: [],
                searchHidden: false
            }
        case searchActionTypes.TARGET_DROP:
            return {
                ...state,
                name: action.payload,
                searchData: state.searchData.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())),
                searchHidden: false
            }
        default:
            return{
                ...state
            }
    }
}