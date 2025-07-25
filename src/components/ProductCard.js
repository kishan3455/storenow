import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    alert(`${quantity} item(s) of ${product.name} added to cart.`);
    // Add your cart logic here
  };

  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₹{product.price}</p>

      {/* Quantity Controls */}
      <div className="quantity-controls">
        <button onClick={decreaseQty}>−</button>
        <span>{quantity}</span>
        <button onClick={increaseQty}>+</button>
      </div>

      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
