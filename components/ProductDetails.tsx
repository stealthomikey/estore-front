// src/components/ProductDetails.tsx
'use client';

import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

// Define Image interface locally
interface Image {
  id: string;
  product_id: string;
  image_url: string;
  is_primary: boolean;
  created_at: string;
}

// Define Product interface locally
interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  rating: string;
  stock: number;
  category_id: string;
  category_name?: string;
  brand_id: string;
  additional_info: { [key: string]: string };
  created_at: string;
  images: Image[];
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const primaryImage = product.images.find((img) => img.is_primary) || product.images[0];
  const rating = parseFloat(product.rating);
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;

  const imageUrl = primaryImage
    ? `http://localhost:5000/images/${primaryImage.image_url}`
    : 'https://via.placeholder.com/150';

  const discountedPrice = parseFloat(product.price) * (1 - parseFloat(product.discount) / 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-[400px] object-contain rounded-xl"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            {product.category_name || 'Unknown Category'}
          </div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => {
              let starClass = 'text-gray-300 stroke-black';
              let clipPercentage = 0;

              if (i < fullStars) {
                starClass = 'text-yellow-400 fill-yellow-400 stroke-black';
                clipPercentage = 100;
              } else if (i === fullStars && fractionalPart > 0) {
                starClass = 'text-yellow-400 stroke-black';
                clipPercentage = fractionalPart * 100;
              }

              return (
                <span key={i} className="relative w-5 h-5 inline-block">
                  <Star
                    size={20}
                    className="text-gray-300 stroke-black absolute top-0 left-0"
                    strokeWidth={1.5}
                  />
                  <span
                    className="absolute top-0 left-0 overflow-hidden"
                    style={{ width: `${clipPercentage}%` }}
                  >
                    <Star
                      size={20}
                      className="text-yellow-400 fill-yellow-400 stroke-black"
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
              );
            })}
            <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
          </div>
          <div className="text-sm text-gray-400 mb-4">Stock: {product.stock}</div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-shop_light_green">
              £{discountedPrice.toFixed(2)}
            </span>
            {parseFloat(product.discount) > 0 && (
              <span className="text-lg text-gray-400 line-through">
                £{parseFloat(product.price).toFixed(2)}
              </span>
            )}
          </div>
          <div className="text-gray-700 mb-6">{product.description}</div>
          {Object.entries(product.additional_info).length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {Object.entries(product.additional_info).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-shop_light_green text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full max-w-[180px]">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;