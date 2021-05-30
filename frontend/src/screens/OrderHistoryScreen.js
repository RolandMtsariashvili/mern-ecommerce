import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import { getMyOrderList } from '../store/actions/orderActions';
import styles from './screensStyles/OrderHistoryScreen.module.scss';
import ShowLoadingOrMessage from './utils/showLoadingOrError';

export default function OrderHistoryScreen({ history }) {
  const myOrdersList = useSelector((state) => state.myOrdersList);
  const { loading, error, orders } = myOrdersList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrderList());
  }, [dispatch]);
  return ShowLoadingOrMessage(
    loading,
    error,
    <Loading theme="light" />,
    <MessageBox variation="error">{error}</MessageBox>,
  ) || (
    <div className={styles.OrderHistoryScreen}>
      <div className={styles.container}>
        <h1 className={styles.title}>Order History</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>
                    {
                    order.isPaid
                      ? order.paidAt.substring(0, 10)
                      : 'No'
                    }
                  </td>
                  <td>
                    {
                    order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : 'No'
                    }
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        history.push(`/order/${order._id}`);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

OrderHistoryScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
