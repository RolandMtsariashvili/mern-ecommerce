import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import styles from './Product.module.scss';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product.id} className={styles.Product}>
      <a href={`/product/${product.id}`}>
        <img
          className={styles.img}
          src={product.image}
          alt={product.description}
        />
      </a>
      <a href={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </a>
      <Rating rating={product.rating} reviewsNum={product.reviewsNum} />
      <div className={styles.price}>{`$${product.price}`}</div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
