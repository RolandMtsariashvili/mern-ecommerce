import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderSummaryContent from '../components/OrderSummaryContent';
import ShippingInformationBoard from '../components/ShipingInformationBoard';
import ShippingLeftWrapper from '../components/ShippingLeftWrapper';
import styles from './screensStyles/PlaceOrderScreen.module.scss';

export default function PlaceOrderScreen() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const placeOrderHandler = () => {
    // Implement place order logics here
  };

  return (
    <div className={styles.PlaceOrderScreen}>
      <ShippingLeftWrapper
        cartItems={cartItems}
      >
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
