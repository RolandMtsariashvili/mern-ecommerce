import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './CartButton.module.scss';

export default function CartButton({ clickEventListener }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <button
      className={styles.CartButton}
      id="cart-button"
      type="button"
      onClick={clickEventListener}
    >
      <span className={styles.counter}>{cartItems.length}</span>
      <i className={`fa fa-shopping-cart ${styles.cartIcon}`} />
    </button>
  );
}

CartButton.propTypes = {
  clickEventListener: PropTypes.func.isRequired,
};
