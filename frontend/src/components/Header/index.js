import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/userActions';
import styles from './Header.module.scss';

export default function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <header className={styles.Header}>
      <div className={styles.wrapper}>
        <div>
          <a href="/" className={styles.logo}>
            MERNStore
          </a>
        </div>
        <div className={styles.rightBlock}>
          {
            userInfo
              ? (
                <div className={styles.dropdown}>
                  <div>
                    {userInfo.name}
                    {' '}
                    <i className="fa fa-caret-down" />
                    {' '}
                  </div>
                  <ul className={styles.dropdownContent}>
                    <li>
                      <Link
                        to="/orderhistory"
                        className={styles.dropdownItem}
                      >
                        Order History
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={signOutHandler}
                        className={styles.dropdownItem}
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )
          }
        </div>
      </div>
    </header>
  );
}
