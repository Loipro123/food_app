import {searchActionTypes} from './search.types';

export const onchangeInput = (name) => ({
    type: searchActionTypes.ONCHANGE_ACTION,
    payload: name
})

export const cleanInput = () => ({
    type: searchActionTypes.CLEAN_ACTION
})