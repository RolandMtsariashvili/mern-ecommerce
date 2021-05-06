import React from 'react';
import styles from './ShippingProducts.module.scss';

export default function ShippingProducts() {
  return (
    <div className={styles.ShippingProducts}>
      <div className={styles.productInfo}>
        <div className={styles.imageBlock}>
          <img
            alt="placeholder"
            src="https://via.placeholder.com/250x350"
          />
          <div>1</div>
        </div>
      </div>
      <div className={styles.price}>
        <span>Subtotal: </span>
        <span className={styles.subtotalPrice}>$12</span>
      </div>
      <div className={styles.total}>
        <span>Total: </span>
      </div>
    </div>
  );
}
