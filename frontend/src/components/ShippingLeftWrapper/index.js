import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrderSummaryHeader from '../OrderSummaryHeader';
import OrderSummaryContent from '../OrderSummaryContent';
import styles from './ShippingLeftWrapper.module.scss';

export default function ShippingLeftWrapper({
  cartItems,
  children,
}) {
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const orderSummaryClickHandler = () => {
    setOrderSummaryOpen(!orderSummaryOpen);
  };
  return (
    <div className={styles.ShippingLeftWrapper}>
      <OrderSummaryHeader
        showContentClickHandler={orderSummaryClickHandler}
        isContentOpen={orderSummaryOpen}
      >
        <OrderSummaryContent cartItems={cartItems} />
      </OrderSummaryHeader>
      {children}
    </div>

  );
}

ShippingLeftWrapper.propTypes = {
  cartItems: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};
