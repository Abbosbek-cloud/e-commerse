import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function Cart() {
  const { handleBasketShow = Function.prototype, order = [] } = useContext(ShopContext);
  let quantity = order.length;

  return (
    <div className="cart indigo lighten-1 white-text" onClick={handleBasketShow}>
      <i className="material-icons add-shopping-cart">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
