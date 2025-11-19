import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;
  const { increment, decrement, removeOrder } = useContext(ShopContext);

  return (
    <li className="collection-item basket-item" key={id}>
      <div className="basket-item-content">
        <div className="basket-item-info">
          <h4 className="basket-item-name">{name}</h4>
          <div className="basket-item-details">
            <span className="basket-item-price">${price}</span>
            <span className="basket-item-separator">×</span>
            <span className="basket-item-quantity">{quantity}</span>
            <span className="basket-item-separator">=</span>
            <span className="basket-item-total">${(price * quantity).toFixed(2)}</span>
          </div>
        </div>

        <div className="basket-item-actions">
          <button className="basket-btn decrement-btn" onClick={() => decrement(id)} aria-label="Decrease quantity">
            <i className="material-icons">remove</i>
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="basket-btn increment-btn" onClick={() => increment(id)} aria-label="Increase quantity">
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>

      <button className="basket-delete-btn" onClick={() => removeOrder(id)} aria-label="Remove item">
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
}
