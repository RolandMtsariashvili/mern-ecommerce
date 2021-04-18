import React from 'react';
import Product from '../components/Product';
import data from '../data';
import styles from './screensStyles/HomeScreen.module.scss';

export default function HomeScreen() {
  return (
    <div className="container">
      <div className={styles.Products}>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
