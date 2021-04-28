import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal/index';

function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const clickEventListener = (e) => {
    if (e.target.closest('#cart-button') || (e.target.closest('aside') && !e.target.closest('#close-btn'))) {
      setIsCartModalOpen(true);
    } else {
      setIsCartModalOpen(false);
    }
  };
  document.body.addEventListener('click', clickEventListener);

  return (
    <BrowserRouter>
      <div
        className="grid-container"
      >
        <Header />
        <CartModal isCartModalOpen={isCartModalOpen} clickEventListener={clickEventListener} />
        <main className="main">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <CartButton clickEventListener={clickEventListener} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
