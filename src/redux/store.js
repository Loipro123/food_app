import {createStore,applyMiddleware} from 'redux';
import rootReducer from './root';


const middleware = [];

export const store = createStore(rootReducer,applyMiddleware(...middleware));
