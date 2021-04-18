import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';
import data from '../data';
import styles from './screensStyles/ProductScreen.module.scss';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x.id === props.match.params.id);
  if (!product) return <div>Product Not Found</div>;

  return (
    <div className={styles.ProductScreen}>
      <div>
        <img
          className={styles.img}
          src={product.image}
          alt={product.description}
        />
      </div>
      <div className={styles.left}>
        <h1>{product.name}</h1>
        <Rating
          rating={product.rating}
          reviewsNum={product.reviewsNum}
        />
        <div className={styles.price}>{`$${product.price}`}</div>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.status}>
          Status:
          <span>In Stock</span>
        </div>
        <button type="button" className={styles.addToCart}>
          Add To Cart
        </button>
        <Link to="/">
          <button type="button" className={styles.back}>
            Back To Store
          </button>
        </Link>
      </div>
    </div>
  );
}

ProductScreen.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
