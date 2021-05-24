/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import { EMPTY_CART } from '../constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants';
import generateErrorMessage from './utils/generateErrorMessage';

export const createOrder = (
  order,
) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: EMPTY_CART,
    });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: generateErrorMessage(error),
    });
  }
};
