import React from 'react';
import data from './data';

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
              <div className="product-card" key={product.id}>
                <a href={`/product/${product.id}`}>
                  <img
                    className="product-card__img"
                    src={product.image}
                    alt={product.description}
                  />
                </a>
                <a href={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                </div>
                <div className="price">{`$${product.price}`}</div>
              </div>
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
