import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderSummaryContent from '../components/OrderSummaryContent';
import ShippingLeftWrapper from '../components/ShippingLeftWrapper';
import { savePaymentMethod } from '../store/actions/cartActions';
import styles from './screensStyles/ShippingMethodScreen.module.scss';
import ShippingInformationBoard from '../components/ShipingInformationBoard';

export default function ShippingMethodScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const [paymentMethodState, setPaymentMethodState] = useState(paymentMethod);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethodState));
    history.push('/placeorder');
  };
  return (
    <div className={styles.ShippingMethodScreen}>
      <ShippingLeftWrapper
        cartItems={cartItems}
      >
        <div className={styles.methodScreenInner}>
          <h1 className={styles.title}>Shipping Method</h1>
          <CheckoutSteps
            signInStep
            informationStep
            paymentStep
          />
          <ShippingInformationBoard
            informationFields={[
              { name: 'Contact', info: shippingAddress.email },
              { name: 'Ship To', info: `${shippingAddress.address}, ${shippingAddress.appartment ? shippingAddress.appartment : ''} ${shippingAddress.postalCode}, ${shippingAddress.city}, ${shippingAddress.country}` },
            ]}
          />
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.formHeader}>Shipping Method</div>
            <div className={styles.inputWrapper}>
              <label htmlFor="paypal">
                <input
                  type="radio"
                  id="paypal"
                  value={paymentMethodState}
                  name="paymentMethod"
                  checked
                  onChange={(e) => setPaymentMethodState(e.target.value)}
                />
                <span>PayPal</span>
              </label>
              <span className={styles.methodPrice}>
                $
                {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </span>
            </div>
            <div className={styles.controllsWrapper}>
              <button
                type="submit"
              >
                Continue
              </button>
              <Link to="/shipping" className={styles.backLink}>
                return to information
              </Link>
            </div>
          </form>
        </div>
      </ShippingLeftWrapper>
      <div className={styles.orderSummary}>
        <OrderSummaryContent cartItems={cartItems} />
      </div>
    </div>
  );
}

ShippingMethodScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
