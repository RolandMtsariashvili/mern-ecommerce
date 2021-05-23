import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderSummaryContent from '../components/OrderSummaryContent';
import styles from './screensStyles/ShippingInformationScreen.module.scss';
import { saveShippingAddress } from '../store/actions/cartActions';
import ShippingLeftWrapper from '../components/ShippingLeftWrapper';

export default function ShippingInformationScreen({ history }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  if (!userInfo) {
    history.push('/signin');
  }

  const [name, setName] = useState(shippingAddress.name);
  const [email, setEmail] = useState(shippingAddress.email);
  const [address, setAddress] = useState(shippingAddress.address);
  const [appartment, setAppartment] = useState(shippingAddress.appartment ?? '');
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [phone, setPhone] = useState(shippingAddress.phone ?? '');

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        name,
        email,
        address,
        appartment: appartment || null,
        city,
        postalCode,
        country,
        phone: phone || null,
      }),
    );
    history.push('/payment');
  };

  return (
    <div className={styles.ShippingInformationScreen}>
      <ShippingLeftWrapper
        cartItems={cartItems}
      >
        <div className={styles.informationScreenInner}>
          <h1 className={styles.title}>Shipping Information</h1>
          <CheckoutSteps
            signInStep
            informationStep
          />
          <form onSubmit={submitHandler}>
            <span>Contact Information</span>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <span>Shipping Address</span>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                id="address"
                placeholder="Address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label htmlFor="appartment">
              <input
                type="text"
                id="appartment"
                placeholder="Apartment, suite, etc (optional)"
                value={appartment}
                onChange={(e) => setAppartment(e.target.value)}
              />
            </label>
            <div className={styles.groupInputs}>
              <label htmlFor="postalCode">
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Postal code"
                  value={postalCode}
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </label>
              <label htmlFor="city">
                <input
                  type="text"
                  id="city"
                  placeholder="city"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <label htmlFor="country">
              <input
                type="text"
                id="country"
                placeholder="Country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label htmlFor="phone">
              <input
                type="text"
                id="phone"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <button type="submit">Continue to shipping</button>
          </form>
        </div>
      </ShippingLeftWrapper>
      <div className={styles.orderSummary}>
        <OrderSummaryContent cartItems={cartItems} />
      </div>
    </div>
  );
}

ShippingInformationScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
