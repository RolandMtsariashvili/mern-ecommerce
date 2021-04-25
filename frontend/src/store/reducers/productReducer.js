/* eslint-disable import/prefer-default-export */
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_VIEW_REQUEST,
  PRODUCT_VIEW_SUCCESS,
  PRODUCT_VIEW_FAIL,
} from '../constants/productConstants';

export const productListReducer = (
  state = { loading: true, products: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productViewReducer = (
  state = { product: {}, loading: true },
  action,
) => {
  switch (action.type) {
    case PRODUCT_VIEW_REQUEST:
      return { loading: true };
    case PRODUCT_VIEW_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_VIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
