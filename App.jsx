import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './store/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="background-image">
      <div className="landing-content">
        <p className="landing-eyebrow">Welcome to</p>
        <h1 className="landing-title">
          Paradise<br /><span>Nursery</span>
        </h1>
        <p className="landing-tagline">
          Where every plant tells a story.
        </p>
        <button
          className="btn-get-started"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/"         element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart"     element={<CartItem />} />
          <Route path="/about"    element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;