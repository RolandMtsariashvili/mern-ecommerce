import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartModal.module.scss';

export default function CartModal({ isCartModalOpen, clickEventListener }) {
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
        <div className={styles.product}>
          <img
            src="https://via.placeholder.com/250x350"
            alt="pic"
            className={styles.img}
          />
          <div className={styles.info}>
            <p className={styles.productName}>Bershka Slim Shirt</p>
            <p>Price: $17</p>
            <p>
              Quantity:
              <span className={styles.quantity}>2</span>
            </p>
          </div>
          <button className={styles.remove} type="button">
            Remove
          </button>
        </div>

        <div className={styles.product}>
          <img
            src="https://via.placeholder.com/250x350"
            alt="pic"
            className={styles.img}
          />
          <div className={styles.info}>
            <p className={styles.productName}>Bershka Slim Shirt</p>
            <p>Price: $17</p>
            <p>
              Quantity:
              <span className={styles.quantity}>2</span>
            </p>
          </div>
          <button className={styles.remove} type="button">
            Remove
          </button>
        </div>

        <div className={styles.product}>
          <img
            src="https://via.placeholder.com/250x350"
            alt="pic"
            className={styles.img}
          />
          <div className={styles.info}>
            <p className={styles.productName}>Bershka Slim Shirt</p>
            <p>Price: $17</p>
            <p>
              Quantity:
              <span className={styles.quantity}>2</span>
            </p>
          </div>
          <button className={styles.remove} type="button">
            Remove
          </button>
        </div>
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
