/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './screensStyles/SigninScreen.module.scss';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    // Signin actions
  };

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
            <Link to="/register" className={styles.registerLink}>
              Create an account
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
