// src/components/ProductGrid.tsx
'use client';

import React from 'react';
import ProductCard from './ProductCard';
import ShopMoreButton from './ShopMoreButton';
import useProductData from '../hooks/useProductData';
import useProductSortAndFilter from '../hooks/useProductSortAndFilter';

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

interface ProductGridProps {
  sortOption?: string; // Optional prop
  selectedFilters?: string[]; // Optional prop
  maxProducts?: number; // Optional prop to limit number of products
  showShopMoreButton?: boolean; // Optional prop to show "Shop More" button
}

const ProductGrid = ({
  sortOption = '',
  selectedFilters = [],
  maxProducts,
  showShopMoreButton = false,
}: ProductGridProps) => {
  const { products, loading, error } = useProductData();

  // Apply sorting and filtering
  const sortedAndFilteredProducts = useProductSortAndFilter(products, {
    sortOption,
    selectedFilters,
  });

  // Limit the number of products if maxProducts is specified
  const displayedProducts =
    maxProducts !== undefined
      ? sortedAndFilteredProducts.slice(0, maxProducts)
      : sortedAndFilteredProducts;

  if (loading) {
    return <div className="text-center p-6">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">{error}</div>;
  }

  if (displayedProducts.length === 0) {
    return (
      <div className="bg-gray-100 rounded-2xl p-6 mt-8 mb-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center text-gray-500 text-lg">
          No products found. Try adjusting your filters or sort options.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-2xl p-6 mt-8 mb-8 min-h-[400px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showShopMoreButton && (
        <div className="flex justify-center mt-6">
          <ShopMoreButton />
        </div>
      )}
    </div>
  );
};

export default ProductGrid;