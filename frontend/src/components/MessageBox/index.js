import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageBox.module.scss';

export default function MessageBox({ variation, children }) {
  return (
    <div className={`${styles.MessageBox} ${styles[variation] || 'info'}`}>
      <p>{children}</p>
    </div>
  );
}

MessageBox.propTypes = {
  variation: PropTypes.string,
  children: PropTypes.string,
};

MessageBox.defaultProps = {
  variation: 'info',
  children: '',
};
