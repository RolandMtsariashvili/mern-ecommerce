import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './CartProduct.module.scss';
import { removeFromCart } from '../../store/actions/cartActions';

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className={styles.Product}>
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
        onClick={() => removeHandler(cartItem.product)}
      >
        Remove
      </button>
    </div>
  );
}

CartProduct.propTypes = {
  cartItem: PropTypes.instanceOf(Object).isRequired,
};
