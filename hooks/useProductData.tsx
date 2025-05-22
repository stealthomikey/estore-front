// src/hooks/useProductData.tsx
"use client";

import { useState, useEffect } from 'react';

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
  brand_id: string;
  additional_info: { [key: string]: string };
  created_at: string;
  images: Image[];
}

const useProductData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://michaelxkenxoestore-api.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run once on mount

  return { products, loading, error };
};

export default useProductData;