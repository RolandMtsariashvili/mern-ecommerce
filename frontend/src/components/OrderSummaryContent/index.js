import React from 'react';
import styles from './OrderSummaryContent.module.scss';

export default function OrderSummaryContent() {
  return (
    <aside className={styles.OrderSummaryContent}>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.productLeft}>
            <div className={styles.imageWrapper}>
              <img
                alt="product"
                src="https://via.placeholder.com/250x350"
              />
              <div className={styles.counter}>1</div>
            </div>
            <h1 className={styles.title}>Bershka Slim Shirt</h1>
          </div>
          <span className={styles.productPrice}>$20</span>
        </div>
        <div className={styles.product}>
          <div className={styles.productLeft}>
            <div className={styles.imageWrapper}>
              <img
                alt="product"
                src="https://via.placeholder.com/250x350"
              />
              <div className={styles.counter}>1</div>
            </div>
            <h1 className={styles.title}>Bershka Slim Shirt</h1>
          </div>
          <span className={styles.productPrice}>$20</span>
        </div>
      </div>
      <div className={styles.priceField}>
        <div className={styles.priceAlign}>
          <span>Subtotal:</span>
          <span>
            <b>$20</b>
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
          <b>$20</b>
        </span>
      </div>
    </aside>
  );
}
