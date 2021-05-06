import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CartModal.module.scss';
import CartProduct from '../CartProduct';

export default function CartModal({
  isCartModalOpen,
  closeModalClickHandler,
}) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <aside className={`${styles.CartModal} ${isCartModalOpen ? styles.open : ''}`}>
      <div className={styles.top}>
        <h2 className={styles.header}>SHOPPING CART</h2>
        <button
          id="close-btn"
          className={styles.closeBtn}
          type="button"
          onClick={() => closeModalClickHandler()}
        >
          <i
            className="fa fa-times"
          />
        </button>
      </div>
      <div className={styles.products}>
        {
          !cartItems.length
            ? <div className={styles.empty}>YOUR CART IS EMPTY</div>
            : (
              cartItems.map((cartItem) => (
                <CartProduct
                  key={cartItem.product}
                  cartItem={cartItem}
                />
              ))
            )
        }
      </div>
      <div className={styles.checkout}>
        <div className={styles.subtotal}>
          <span>Subtotal:</span>
          <span className={styles.subtotalValue}>
            $
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </span>
        </div>
        <Link to="/shipping">
          <button
            className={styles.checkoutButton}
            type="button"
          >
            Begin Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

CartModal.propTypes = {
  isCartModalOpen: PropTypes.bool.isRequired,
  closeModalClickHandler: PropTypes.func.isRequired,
};
