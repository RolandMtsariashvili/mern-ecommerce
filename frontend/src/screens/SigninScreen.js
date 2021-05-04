import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './screensStyles/SigninScreen.module.scss';
import { signIn } from '../store/actions/userActions';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

export default function SigninScreen({ location: { search }, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = search ? search.split('=')[1] : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const {
    userInfo,
    loading,
    error,
  } = userSignin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo, error]);
  return (
    <div className={styles.SignIn}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1 className={styles.title}>Sign In</h1>
        <label htmlFor="email">
          <span>Email Address</span>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
        >
          Sign In
        </button>
        <div className={styles.register}>
          <span>
            Not Registered Yet?
            <Link to={`/register?redirect=${redirect}`} className={styles.registerLink}>
              Create an account
            </Link>
          </span>
        </div>
      </form>
      {loading && <Loading theme="light" />}
      {error && <MessageBox variation="error">{error}</MessageBox>}
    </div>
  );
}

SigninScreen.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
