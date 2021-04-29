import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';
import styles from './CartProduct.module.scss';

export default function CartProduct({ key, cartItem }) {
  const dispatch = useDispatch();
  return (
    <div key={key}>
      <img
        src={cartItem.image}
        alt={cartItem.description}
        className={styles.img}
      />
      <div className={styles.info}>
        <p className={styles.productName}>
          {cartItem.name}
        </p>
        <p>
          Price:
          {' '}
          {cartItem.price * cartItem.quantity}
        </p>
        <p>
          Quantity:
          {' '}
          <span className={styles.quantity}>
            {cartItem.quantity}
          </span>
        </p>
      </div>
      <button
        className={styles.remove}
        type="button"
        onClick={dispatch(removeFromCart('1'))}
      >
        Remove
      </button>
    </div>
  );
}

CartProduct.propTypes = {
  key: PropTypes.string.isRequired,
  cartItem: PropTypes.instanceOf(Object).isRequired,
};
