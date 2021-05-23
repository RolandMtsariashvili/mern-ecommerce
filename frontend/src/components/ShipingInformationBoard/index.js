import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ShippingInformationBoard.module.scss';

export default function ShippingInformationBoard({ informationFields }) {
  return (
    <div className={styles.ShippingInformationBoard}>
      {
        informationFields.map((informationFiled) => (
          <div key={informationFiled.name} className={styles.informationFiled}>
            <span className={styles.fieldName}>{informationFiled.name}</span>
            <span className={styles.fieldInfo}>
              {informationFiled.info}
            </span>
            <Link to="/shipping" className={styles.link}>
              Change
            </Link>
          </div>
        ))
      }
    </div>
  );
}

ShippingInformationBoard.propTypes = {
  informationFields: PropTypes.instanceOf(Array).isRequired,
};
