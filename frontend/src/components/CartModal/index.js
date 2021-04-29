/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';
import styles from './CartModal.module.scss';

export default function CartModal({ isCartModalOpen, clickEventListener }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <aside className={`${styles.CartModal} ${isCartModalOpen ? styles.open : ''}`}>
      <div className={styles.top}>
        <h2 className={styles.header}>SHOPPING CART</h2>
        <button id="close-btn" className={styles.closeBtn} type="button" onClick={clickEventListener}>
          <i
            className="fa fa-times"
          />
        </button>
      </div>
      <div className={styles.products}>
        {
          cartItems.map((cartItem) => (
            <div key={cartItem.product} className={styles.product}>
              <img
                src={cartItem.image}
                alt={cartItem.description}
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={styles.productName}>
                  {cartItem.name}
                </p>
                <p>
                  Price:
                  {' '}
                  {cartItem.price * cartItem.quantity}
                </p>
                <p>
                  Quantity:
                  {' '}
                  <span className={styles.quantity}>
                    {cartItem.quantity}
                  </span>
                </p>
              </div>
              <button
                className={styles.remove}
                type="button"
                onClick={() => removeHandler(cartItem.product)}
              >
                Remove
              </button>
            </div>
          ))
        }
      </div>
      <div className={styles.checkout}>
        <div className={styles.subtotal}>
          <span>Subtotal:</span>
          <span className={styles.subtotalValue}>$51</span>
        </div>
        <button className={styles.checkoutButton} type="button">
          Begin Checkout
        </button>
      </div>
    </aside>
  );
}

CartModal.propTypes = {
  isCartModalOpen: PropTypes.bool.isRequired,
  clickEventListener: PropTypes.func.isRequired,
};
