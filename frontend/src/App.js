import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal/index';
import { cartModal } from './store/actions/cartActions';

function App() {
  const isCartModalOpen = useSelector((state) => state.cart.isCartModalOpen);

  const dispatch = useDispatch();
  const openModalClickHandler = () => {
    dispatch(cartModal(true));
  };

  const closeModalClickHandler = () => {
    dispatch(cartModal(false));
  };

  return (
    <BrowserRouter>
      <div
        className="grid-container"
      >
        <Header />
        <CartModal
          isCartModalOpen={isCartModalOpen || false}
          closeModalClickHandler={closeModalClickHandler}
        />
        <main className="main">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <CartButton openModalClickHandler={openModalClickHandler} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
