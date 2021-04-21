import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import styles from './screensStyles/HomeScreen.module.scss';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

function ShowLoadingOrMessage(
  loading,
  error,
  loadingComponent,
  errorComponent,
) {
  if (loading) return loadingComponent;
  if (error) return errorComponent;
}

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      {
        ShowLoadingOrMessage(
          loading,
          error,
          <Loading theme="dark" />,
          <MessageBox variation="error">{error}</MessageBox>,
        ) || (
          <div className={styles.Products}>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )
      }
    </div>
  );
}
