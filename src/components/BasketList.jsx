import React, { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

const BasketList = () => {
  const { order = [], handleBasketShow = Function.prototype } = useContext(ShopContext);
  const totalPrice = order.reduce((sum, good) => {
    return sum + good.price * good.quantity;
  }, 0);

  const totalItems = order.reduce((sum, good) => sum + good.quantity, 0);

  return (
    <div className="bgBl" onClick={handleBasketShow}>
      <div className="basket-list" onClick={(e) => e.stopPropagation()}>
        <div className="collection-item active basket-header">
          <div className="basket-header-content">
            <i className="material-icons">shopping_cart</i>
            <span>
              Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <i className="material-icons basket-close" onClick={handleBasketShow}>
            close
          </i>
        </div>

        <div className="basket-items-container">
          {order.length ? (
            order.map((item) => <BasketItem key={item.id} {...item} />)
          ) : (
            <div className="empty-basket">
              <i className="material-icons empty-basket-icon">shopping_cart</i>
              <p className="empty-basket-text">Your cart is empty</p>
              <p className="empty-basket-subtext">Add some items to get started!</p>
            </div>
          )}
        </div>

        {order.length > 0 && (
          <>
            <div className="basket-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="basket-footer">
              <button className="checkout-button">
                <i className="material-icons">payment</i>
                <span>Proceed to Checkout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BasketList;
