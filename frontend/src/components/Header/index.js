import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.wrapper}>
        <div>
          <a href="/" className={styles.logo}>
            MERNStore
          </a>
        </div>
        <div className={styles.rightBlock}>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </div>
    </header>
  );
}
