import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div>
          <a href="/" className="header__logo">
            MERNStore
          </a>
        </div>
        <div className="header__right">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </div>
    </header>
  );
}
