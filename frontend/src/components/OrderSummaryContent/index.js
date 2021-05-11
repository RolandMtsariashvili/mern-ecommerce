import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummaryContent.module.scss';

export default function OrderSummaryContent({ cartItems }) {
  return (
    <aside className={styles.OrderSummaryContent}>
      <div className={styles.products}>
        {cartItems.map((cartItem) => (
          <div key={cartItem.product} className={styles.product}>
            <div className={styles.productLeft}>
              <div className={styles.imageWrapper}>
                <img
                  alt={cartItem.description}
                  src={cartItem.image}
                />
                <div className={styles.counter}>{cartItem.quantity}</div>
              </div>
              <h1 className={styles.title}>{cartItem.name}</h1>
            </div>
            <span className={styles.productPrice}>
              $
              {cartItem.price}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.priceField}>
        <div className={styles.priceAlign}>
          <span>Subtotal:</span>
          <span>
            $
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </span>
        </div>
        <div className={styles.priceAlign}>
          <span>Shipping:</span>
          <span>
            <b>$0</b>
          </span>
        </div>
      </div>
      <div className={styles.priceAlign}>
        <span>
          <b>Total:</b>
        </span>
        <span className={styles.totalPrice}>
          {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
        </span>
      </div>
    </aside>
  );
}

OrderSummaryContent.propTypes = {
  cartItems: PropTypes.instanceOf(Object).isRequired,
};
