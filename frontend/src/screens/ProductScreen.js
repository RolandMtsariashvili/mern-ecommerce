import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { viewProduct } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import Rating from '../components/Rating';
import styles from './screensStyles/ProductScreen.module.scss';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import showLoadingOrError from './utils/showLoadingOrError';

export default function ProductScreen({ match: { params: { id } } }) {
  const productView = useSelector((state) => state.productView);
  const [quantity, setQuantity] = useState(1);
  const {
    loading,
    error,
    product,
  } = productView;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity));
  };

  useEffect(() => {
    dispatch(viewProduct(id));
  }, [dispatch, id]);
  return (
    <>
      {
        showLoadingOrError(
          loading,
          error,
          <Loading theme="dark" />,
          <MessageBox variation="error">{error}</MessageBox>,
        ) || (
          <div className={styles.ProductScreen}>
            <div>
              <img
                className={styles.img}
                src={product.image}
                alt={product.description}
              />
            </div>
            <div className={styles.right}>
              <h1>{product.name}</h1>
              <Rating
                rating={product.rating}
                reviewsNum={product.reviewsNum}
              />
              <div className={styles.price}>{`$${product.price}`}</div>
              <p className={styles.description}>{product.description}</p>
              <label htmlFor="quantity">
                Quantity:
                {' '}
                <input
                  className={styles.quantity}
                  id="quantity"
                  type="number"
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  max={product.countInStock}
                />
              </label>
              <button
                type="button"
                className={`${styles.addToCart} ${!product.countInStock ? styles.disabled : ''}`}
                disabled={!product.countInStock}
                onClick={addToCartHandler}
              >
                {product.countInStock ? 'Add To Cart' : 'Not In Stock'}
              </button>
              <Link to="/">
                <button type="button" className={styles.back}>
                  Back To Store
                </button>
              </Link>
            </div>
          </div>
        )
      }
    </>
  );
}

ProductScreen.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
