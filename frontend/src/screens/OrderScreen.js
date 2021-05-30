import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import OrderSummaryContent from '../components/OrderSummaryContent';
import ShippingInformationBoard from '../components/ShipingInformationBoard';
import ShippingLeftWrapper from '../components/ShippingLeftWrapper';
import styles from './screensStyles/OrderScreen.module.scss';
import ShowLoadingOrError from './utils/showLoadingOrError';
import { showOrderDetails } from '../store/actions/orderActions';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

export default function OrderScreen({ match }) {
  const orderId = match.params.id;
  const orderDetails = useSelector((state) => state.orderDetials);
  const {
    order,
    loading,
    error,
  } = orderDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showOrderDetails(orderId));
  }, [dispatch, orderId]);

  return ShowLoadingOrError(
    loading,
    error,
    <Loading theme="dark" />,
    <MessageBox variation="error">{error}</MessageBox>,
  ) || (
    <div className={styles.OrderScreen}>
      <ShippingLeftWrapper
        cartItems={order.orderItems}
      >
        <div className={styles.orderScreenInner}>
          <h1 className={styles.title}>Order</h1>
          <div className={styles.orderInformationSection}>
            <ShippingInformationBoard
              informationFields={[
                { name: 'order ID', info: 'asdasdsadsa' },
              ]}
              noChange
            />
          </div>
          <div className={styles.orderInformationSection}>
            <h2 className={styles.orderInformationSectionTitle}>
              Shipping
            </h2>
            <ShippingInformationBoard
              informationFields={[
                { name: 'name', info: 'admin' },
                { name: 'contact', info: 'admin@example.com' },
                { name: 'ship to', info: 'address placeholder' },
                { name: 'Postal Code', info: '12313' },
              ]}
              noChange
            />
          </div>
          <div className={styles.orderInformationSection}>
            <h2 className={styles.orderInformationSectionTitle}>
              Payment
            </h2>
            <ShippingInformationBoard
              informationFields={[
                { name: 'paid At', info: 'Not Paid' },
              ]}
              noChange
            />
          </div>
          <div className={styles.orderInformationSection}>
            <h2 className={styles.orderInformationSectionTitle}>
              Delivery
            </h2>
            <ShippingInformationBoard
              informationFields={[
                { name: 'Delivered At', info: 'Not Delivered' },
              ]}
              noChange
            />
          </div>
        </div>
      </ShippingLeftWrapper>
      <div className={styles.orderSummary}>
        <OrderSummaryContent cartItems={order.orderItems} />
      </div>
    </div>
  );
}

OrderScreen.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
