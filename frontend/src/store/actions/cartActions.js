import Axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_MODAL,
} from '../constants/cartConstants';

export const addToCart = (
  productId,
  quantity,
) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.id,
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
