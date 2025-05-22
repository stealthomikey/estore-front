'use client';

import React, {useState} from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { blog } from '@/images'; // construction meme image


interface Image {
  id: string;
  product_id: string;
  image_url: string;
  is_primary: boolean;
  created_at: string;
}

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const primaryImage = product.images.find((img) => img.is_primary) || product.images[0];
  const rating = parseFloat(product.rating);
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;

  const [showPopup, setShowPopup] = useState(false);

  const imageUrl = primaryImage
    ? `https://res.cloudinary.com/dsezrayrn/image/upload/${primaryImage.image_url}`
    : 'https://res.cloudinary.com/dsezrayrn/image/upload/v1747945584/Image_gmbu3r.png';

  return (
    <>
    <div className="bg-white rounded-xl shadow-md flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-2xl h-[500px] w-full max-w-sm p-4">
      <a
        href={`/product/${product.id}`}
        className="w-full h-1/2 rounded-t-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-shop_light_green flex-shrink-0 relative"
        tabIndex={0}
        aria-label={`View ${product.title}`}
      >
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
        />
      </a>
      <div className="flex flex-col items-center w-full px-4 pt-4 pb-2 flex-1">
        <h3 className="text-lg font-semibold mb-1 text-center">{product.title}</h3>
        <div className="text-sm text-gray-500 mb-2 text-center">
          {product.category_name || 'Unknown Category'}
        </div>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => {
            let clipPercentage = 0;

            if (i < fullStars) {
              clipPercentage = 100;
            } else if (i === fullStars && fractionalPart > 0) {
              clipPercentage = fractionalPart * 100;
            }

            return (
              <span key={i} className="relative w-4 h-4 inline-block">
                <Star
                  size={16}
                  className="text-gray-300 stroke-black absolute top-0 left-0"
                  strokeWidth={1.5}
                />
                <span
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${clipPercentage}%` }}
                >
                  <Star
                    size={16}
                    className="text-yellow-400 fill-yellow-400 stroke-black"
                    strokeWidth={1.5}
                  />
                </span>
              </span>
            );
          })}
          <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
        </div>
        <div className="text-xs text-gray-400 mb-3">Stock: {product.stock}</div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-shop_light_green">
            £{(parseFloat(product.price) * (1 - parseFloat(product.discount) / 100)).toFixed(2)}
          </span>
          {parseFloat(product.discount) > 0 && (
            <span className="text-sm text-gray-400 line-through">
              £{parseFloat(product.price).toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center pb-10">
        <button onClick={() => setShowPopup(true)} className="flex items-center gap-2 bg-shop_light_green text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full max-w-[180px]">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
          {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full relative p-5 text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-2">Basket Under Construction</h2>
            <p className="text-sm text-gray-600 mb-4">Coming soon!</p>
            <div className="w-full h-48 relative rounded overflow-hidden">
              <Image
                src={blog}
                alt="Under Construction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default ProductCard;
