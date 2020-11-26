import {combineReducers} from 'redux';
import {sibebarReducer} from './sidebar/sidebar.reducer';
import {mainReducer} from './main/main.reducer';

const rootReducer = combineReducers({
    sidebar: sibebarReducer,
    mainData: mainReducer
});

export default rootReducer;