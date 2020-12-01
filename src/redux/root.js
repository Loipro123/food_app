import {combineReducers} from 'redux';
import {sibebarReducer} from './sidebar/sidebar.reducer';
import {mainReducer} from './main/main.reducer';
import {foodReducer} from './directory/food.reducer';
const rootReducer = combineReducers({
    sidebar: sibebarReducer,
    mainData: mainReducer,
    foodData: foodReducer
});

export default rootReducer;