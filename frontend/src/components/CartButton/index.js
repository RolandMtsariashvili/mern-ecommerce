import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartButton.module.scss';
import { cartModal } from '../../store/actions/cartActions';

export default function CartButton() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const openModalClickHandler = () => {
    dispatch(cartModal(true));
  };
  return (
    <button
      className={styles.CartButton}
      id="cart-button"
      type="button"
      onClick={openModalClickHandler}
    >
      <span className={styles.counter}>{cartItems.length}</span>
      <i className={`fa fa-shopping-cart ${styles.cartIcon}`} />
    </button>
  );
}
