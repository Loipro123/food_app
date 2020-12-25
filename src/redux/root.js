import {combineReducers} from 'redux';
import {sibebarReducer} from './sidebar/sidebar.reducer';
import {mainReducer} from './main/main.reducer';
import {foodReducer} from './directory/food.reducer';
import {searchReducer} from './search/search.reducer';
import {productReducer} from './product/product.reducer';
import {footerReducer} from './footer/footer.reducer';
import {popupReducer} from './pop-up/pop-up.reducer';
const rootReducer = combineReducers({
    sidebar: sibebarReducer,
    mainData: mainReducer,
    foodData: foodReducer,
    search: searchReducer,
    product: productReducer,
    footer: footerReducer,
    popup: popupReducer
});

export default rootReducer;