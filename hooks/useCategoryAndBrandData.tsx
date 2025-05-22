// src/hooks/useCategoryAndBrandData.tsx
'use client';

import { useState, useEffect } from 'react';

interface Category {
  id: string;
  name: string;
}

interface Brand {
  id: string;
  name: string;
}

const useCategoryAndBrandData = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await fetch('http://localhost:5000/api/categories');
        if (!categoryResponse.ok) throw new Error('Failed to fetch categories');
        const categoryData: Category[] = await categoryResponse.json();

        // Fetch brands
        const brandResponse = await fetch('http://localhost:5000/api/brands');
        if (!brandResponse.ok) throw new Error('Failed to fetch brands');
        const brandData: Brand[] = await brandResponse.json();

        setCategories(categoryData);
        setBrands(brandData);
      } catch (error) {
        console.error('Error fetching categories or brands:', error);
        setError('Failed to load categories or brands. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, brands, loading, error };
};

export default useCategoryAndBrandData;