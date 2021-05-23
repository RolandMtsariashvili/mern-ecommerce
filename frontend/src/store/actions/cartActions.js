import Axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_MODAL,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (
  productId,
  quantity,
) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      description: data.description,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (
  productId,
) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartModal = (modalState) => (dispatch) => {
  dispatch({
    type: CART_MODAL,
    payload: modalState,
  });
};

export const saveShippingAddress = (
  data,
) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (
  data,
) => (dispatch) => {
  dispatch({ type: SAVE_PAYMENT_METHOD, payload: data });
};
