import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../context';

export default function ProductList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing not found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}
