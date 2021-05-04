/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './screensStyles/RegisterScreen.module.scss';
import { register } from '../store/actions/userActions';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen({ location: { search }, history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const redirect = search ? search.split('=')[1] : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords Doesn\'t match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  return (
    <div className={styles.RegisterScreen}>
      <form onSubmit={submitHandler} className={styles.form}>
        {loading && <Loading theme="dark" />}
        {error && <MessageBox variation="error">{error}</MessageBox>}
        <h1 className={styles.title}>Sign Up</h1>
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            id="email"
            placeholder="Enter Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="repeatPassword">
          <span>Repeat Password</span>
          <input
            type="password"
            id="repeatPassword"
            placeholder="Repeat Your Password"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
        >
          Sign Up
        </button>
        <div className={styles.signIn}>
          Already Registred?
          <Link to="/signin" className={styles.signInLink}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

RegisterScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
