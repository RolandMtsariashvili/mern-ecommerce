import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderSummaryContent from '../components/OrderSummaryContent';
import ShippingInformationBoard from '../components/ShipingInformationBoard';
import ShippingLeftWrapper from '../components/ShippingLeftWrapper';
import { createOrder } from '../store/actions/orderActions';
import { ORDER_CREATE_RESET } from '../store/constants/orderConstants';
import styles from './screensStyles/PlaceOrderScreen.module.scss';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

export default function PlaceOrderScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const orderCreate = useSelector((state) => state.orderCreate);
  const {
    loading,
    success,
    error,
    order,
  } = orderCreate;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      totalPrice: cartItems.reduce((a, c) => a + c.price * c.quantity, 0),
    }));
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, history, success]);
  return (
    <div className={styles.PlaceOrderScreen}>
      <ShippingLeftWrapper
        cartItems={cartItems}
      >
        {loading && <Loading theme="light" />}
        {error && <MessageBox variation="error">{error}</MessageBox>}
        <div className={styles.placeOrderScreenInner}>
          <h1 className={styles.title}>Place Order</h1>
          <CheckoutSteps
            signInStep
            informationStep
            paymentStep
            placeOrderStep
          />
          <ShippingInformationBoard
            informationFields={[
              { name: 'name', info: shippingAddress.name },
              { name: 'contact', info: shippingAddress.email },
              { name: 'ship to', info: `${shippingAddress.country}, ${shippingAddress.city}, ${shippingAddress.address}, ${shippingAddress.appartment ? shippingAddress.appartment : ''}` },
              { name: 'postal code', info: shippingAddress.postalCode },
              { name: 'method', info: paymentMethod },
            ]}
          />
          <div className={styles.controllsWrapper}>
            <button
              type="button"
              disabled={!cartItems.length}
              onClick={placeOrderHandler}
            >
              {
              cartItems.length ? 'Place Order' : 'No Items In Cart'
            }
            </button>
            <Link to="/payment" className={styles.backLink}>
              Return to payment
            </Link>
          </div>
        </div>
      </ShippingLeftWrapper>
      <div className={styles.orderSummary}>
        <OrderSummaryContent cartItems={cartItems} />
      </div>
    </div>
  );
}

PlaceOrderScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
