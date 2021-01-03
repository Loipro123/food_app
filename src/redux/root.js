import {combineReducers} from 'redux';
import {sibebarReducer} from './sidebar/sidebar.reducer';
import {mainReducer} from './main/main.reducer';
import {foodReducer} from './directory/food.reducer';
import {searchReducer} from './search/search.reducer';
import {productReducer} from './product/product.reducer';
import {popupReducer} from './pop-up/pop-up.reducer';
import { cartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
    sidebar: sibebarReducer,
    mainData: mainReducer,
    foodData: foodReducer,
    search: searchReducer,
    product: productReducer,
    popup: popupReducer,
    cart:cartReducer
});

export default rootReducer;