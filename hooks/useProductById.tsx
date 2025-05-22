'use client';

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
  category_name?: string;
  brand_id: string;
  brand_name?: string; // <-- add this
  additional_info: { [key: string]: string };
  created_at: string;
  images: Image[];
}

interface ProductFetchResult {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const useProductById = (id: string): ProductFetchResult => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrandName = async (brandId: string): Promise<string | null> => {
      try {
        const res = await fetch(`http://localhost:5000/api/brands/${brandId}`);
        if (!res.ok) throw new Error('Failed to fetch brand');
        const data = await res.json();
        return data.name; // Adjust if your API returns differently
      } catch {
        return null;
      }
    };

    const fetchProductAndBrand = async () => {
      setLoading(true);
      setError(null);

      try {
        const productRes = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!productRes.ok) throw new Error('Failed to fetch product');
        const productData: Product = await productRes.json();

        const brandName = await fetchBrandName(productData.brand_id);

        setProduct({ ...productData, brand_name: brandName || undefined });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductAndBrand();
    }
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
