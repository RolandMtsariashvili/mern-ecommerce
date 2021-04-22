import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { viewProduct } from '../store/actions/productActions';
import Rating from '../components/Rating';
import styles from './screensStyles/ProductScreen.module.scss';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import showLoadingOrError from './utils/showLoadingOrError';

export default function ProductScreen({ match: { params: { id } } }) {
  const productView = useSelector((state) => state.productView);
  const {
    loading,
    error,
    product,
  } = productView;
  const dispatch = useDispatch();
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
        )
      }
    </>
  );
}

ProductScreen.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
