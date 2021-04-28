import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartButton.module.scss';

export default function CartButton({ clickEventListener }) {
  return (
    <button
      className={styles.CartButton}
      id="cart-button"
      type="button"
      onClick={clickEventListener}
    >
      <span className={styles.counter}>2</span>
      <i className={`fa fa-shopping-cart ${styles.cartIcon}`} />
    </button>
  );
}

CartButton.propTypes = {
  clickEventListener: PropTypes.func.isRequired,
};
