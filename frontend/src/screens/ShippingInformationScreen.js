import React, { useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import OrderSummaryContent from '../components/OrderSummaryContent';
import OrderSummaryHeader from '../components/OrderSummaryHeader';
import styles from './screensStyles/ShippingInformationScreen.module.scss';

export default function ShippingInformationScreen() {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [appartment, setAppartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState();

  const orderSummaryClickHandler = () => {
    setCartModalOpen(!cartModalOpen);
  };

  return (
    <div className={styles.ShippingInformationScreen}>
      <div className={styles.informationScreenLeft}>
        <OrderSummaryHeader
          showContentClickHandler={orderSummaryClickHandler}
          isContentOpen={cartModalOpen}
        >
          <OrderSummaryContent />
        </OrderSummaryHeader>
        <div className={styles.informationScreenInner}>
          <h1 className={styles.title}>Shipping Information</h1>
          <CheckoutSteps
            signInStep
            informationStep
          />
          <form>
            <span>Contact Information</span>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="email"
                value={email}
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
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                id="address"
                placeholder="Address"
                value={address}
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
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </label>
              <label htmlFor="city">
                <input
                  type="text"
                  id="city"
                  placeholder="city"
                  value={city}
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
      </div>
      <div className={styles.orderSummaryContent}>
        <OrderSummaryContent />
      </div>
    </div>
  );
}
