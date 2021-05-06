import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummaryHeader.module.scss';

export default function OrderSummaryHeader({ children }) {
  return (
    <div className={styles.OrderSummaryHeader}>
      <div className={styles.orderSummaryInner}>
        <div className={styles.summaryWrapper}>
          <div className={styles.summaryContent}>
            <i className="fa fa-shopping-cart" />
            <span>Show order summary</span>
            <i className="fa fa-angle-down" />
          </div>
        </div>
      </div>
      <div className={styles.summaryDropdown}>
        {children}
      </div>
    </div>
  );
}

OrderSummaryHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
