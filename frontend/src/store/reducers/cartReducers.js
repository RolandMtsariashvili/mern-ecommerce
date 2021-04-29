/* eslint-disable import/prefer-default-export */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_MODAL,
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
    default:
      return state;
  }
};
