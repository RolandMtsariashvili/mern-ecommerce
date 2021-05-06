import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckoutSteps.module.scss';

export default function CheckoutSteps({
  signInStep = false,
  informationStep = false,
  paymentStep = false,
  placeOrderStep = false,
}) {
  return (
    <div className={styles.CheckoutSteps}>
      <span className={signInStep ? styles.active : ''}>
        Sign In
      </span>
      <span className={informationStep ? styles.active : ''}>
        Information
      </span>
      <span className={paymentStep ? styles.active : ''}>
        Payment
      </span>
      <span className={placeOrderStep ? styles.active : ''}>
        Place Order
      </span>
    </div>
  );
}

CheckoutSteps.propTypes = {
  signInStep: PropTypes.bool,
  informationStep: PropTypes.bool,
  paymentStep: PropTypes.bool,
  placeOrderStep: PropTypes.bool,
};

CheckoutSteps.defaultProps = {
  signInStep: false,
  informationStep: false,
  paymentStep: false,
  placeOrderStep: false,
};
