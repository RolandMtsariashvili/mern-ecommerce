/* eslint-disable no-underscore-dangle */
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productViewReducer } from './reducers/productReducer';

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productView: productViewReducer,
});
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
