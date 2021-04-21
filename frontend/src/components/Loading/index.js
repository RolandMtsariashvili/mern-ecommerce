import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.scss';

export default function Loading({ theme }) {
  return (
    <div className={`${styles.Loading} ${styles[theme]}`}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
}

Loading.propTypes = {
  theme: PropTypes.string.isRequired,
};
