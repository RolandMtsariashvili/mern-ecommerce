import React from 'react';
import data from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <main className="main">
        <div className="container">
          <div className="products">
            {data.products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
