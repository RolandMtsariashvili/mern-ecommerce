/* eslint-disable import/prefer-default-export */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_MODAL,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  EMPTY_CART,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], isCartModalOpen: false },
  action,
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_MODAL:
      return {
        ...state,
        isCartModalOpen: action.payload,
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
