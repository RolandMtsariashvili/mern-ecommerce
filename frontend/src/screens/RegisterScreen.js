import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './screensStyles/RegisterScreen.module.scss';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const submitHandler = () => {
    // Implement submit action dispatching
  };

  return (
    <div className={styles.RegisterScreen}>
      <form onSubmit={submitHandler} className={styles.form}>
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
