import Axios from 'axios';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_VIEW_REQUEST,
  PRODUCT_VIEW_SUCCESS,
  PRODUCT_VIEW_FAIL,
} from '../constants/productConstants';
import generateErrorMessage from './utils/generateErrorMessage';

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const viewProduct = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_VIEW_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_VIEW_FAIL,
      payload: generateErrorMessage(error),
    });
  }
};
