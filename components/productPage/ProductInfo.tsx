import React, { useState } from 'react';
import StarRating from './StarRating';

interface ProductInfoProps {
  product: {
    title: string;
    description: string;
    rating: number;
    stock: number;
    price: string; // as string
    discount: string; // as string percent
  };
  onAddToCart: (quantity: number) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const priceNum = parseFloat(product.price);
  const discountNum = parseFloat(product.discount);
  const discountedPrice = priceNum * (1 - discountNum / 100);
  const subtotal = (discountedPrice * quantity).toFixed(2);

  return (
    <div className="flex flex-col flex-1 ml-8">
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>

      <StarRating rating={product.rating} ratingCount={Math.round(product.rating * 10)} />

      <div className="text-xs text-gray-400 mb-3">Stock: {product.stock}</div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl font-bold text-shop_light_green">
          £{discountedPrice.toFixed(2)}
        </span>
        {discountNum > 0 && (
          <span className="text-sm text-gray-400 line-through">
            £{priceNum.toFixed(2)}
          </span>
        )}
      </div>

      {/* Quantity & Subtotal */}
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="quantity" className="font-semibold">
          Quantity:
        </label>
        <input
          id="quantity"
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, Number(e.target.value))))}
          className="w-16 border border-gray-300 rounded px-2 py-1"
        />
        <div className="ml-auto font-semibold">
          Subtotal: £{subtotal}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        disabled={product.stock === 0}
        onClick={() => onAddToCart(quantity)}
        className={`px-6 py-2 rounded text-white font-semibold transition ${
          product.stock === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-shop_light_green hover:bg-shop_dark_green'
        }`}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductInfo;
