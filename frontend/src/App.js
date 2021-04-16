import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
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
      <main className="main">
        <div className="container">
          <div className="products">
            {data.products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
