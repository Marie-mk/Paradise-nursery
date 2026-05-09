
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal,
} from '../store/CartSlice';
import { Navbar } from './ProductList';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout is under construction. Thank you for shopping at Paradise Nursery!');
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Your Cart 🛒</h1>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty — time to find your perfect plant!</p>
            <Link to="/products" className="btn-continue">Browse Plants</Link>
          </div>
        ) : (
          <>
            <div className="cart-total-amount">
              <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
            </div>
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-unit-price">
                    Unit Price: ${item.price.toFixed(2)}
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-subtotal">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
            <div className="cart-summary">
              <div className="cart-total-row">
                <span>Total Amount</span>
                <span>${calculateTotalAmount()}</span>
              </div>
              <div className="cart-actions">
                <Link to="/products" className="btn-continue">
                  ← Continue Shopping
                </Link>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
