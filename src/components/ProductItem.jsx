import React, { useContext, useState } from 'react';
import { ShopContext } from '../context';

const ProductItem = (props) => {
  const { id, name, description, price, regularPrice, full_background, rarity, type } = props;
  const { handleAddBtn } = useContext(ShopContext);
  const [imageError, setImageError] = useState(false);

  const rarityColors = {
    COMMON: '#9d9d9d',
    UNCOMMON: '#5fbd5f',
    RARE: '#4a9eff',
    EPIC: '#b965ff',
    LEGENDARY: '#ff8b2c',
    MYTHIC: '#ffeb3b',
  };

  const isDiscounted = regularPrice > price;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card">
      <div className="product-badge" style={{ backgroundColor: rarityColors[rarity] || rarityColors.COMMON }}>
        {rarity}
      </div>
      {isDiscounted && <div className="discount-badge">SALE!</div>}

      <div className="product-image-container">
        {imageError ? (
          <div className="image-broken">
            <i className="material-icons">broken_image</i>
            <p>Image is broken</p>
          </div>
        ) : (
          <img className="product-image" src={full_background} alt={name} loading="lazy" onError={handleImageError} />
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <p className="product-type">{type}</p>
        <p className="product-description">{description}</p>
      </div>

      <div className="product-footer">
        <div className="price-container">
          {isDiscounted && <span className="original-price">${regularPrice}</span>}
          <span className="current-price">${price}</span>
        </div>
        <button className="buy-button" onClick={() => handleAddBtn({ id, name, price })}>
          <i className="material-icons">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
