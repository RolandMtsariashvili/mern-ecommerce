import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../store/actions/productActions';
import Product from '../components/Product';
import styles from './screensStyles/HomeScreen.module.scss';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import ShowLoadingOrError from './utils/showLoadingOrError';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="container">
      {
        ShowLoadingOrError(
          loading,
          error,
          <Loading theme="dark" />,
          <MessageBox variation="error">{error}</MessageBox>,
        ) || (
          <div className={styles.Products}>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )
      }
    </div>
  );
}
