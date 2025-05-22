// src/hooks/useProductSortAndFilter.tsx
import { useMemo } from 'react';

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

interface SortAndFilterOptions {
  sortOption: string;
  selectedFilters: string[];
}

const useProductSortAndFilter = (products: Product[], options: SortAndFilterOptions) => {
  const { sortOption, selectedFilters } = options;

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    if (!selectedFilters.length || selectedFilters.includes('brand-all')) {
      return products;
    }

    return products.filter((product) => {
      const brandFilterIds = selectedFilters
        .filter((f) => f.startsWith('brand-') && f !== 'brand-all')
        .map((f) => f.replace('brand-', ''));
      const categoryFilterIds = selectedFilters
        .filter((f) => f.startsWith('category-'))
        .map((f) => f.replace('category-', ''));

      const matchesBrand =
        brandFilterIds.length === 0 || brandFilterIds.includes(product.brand_id);
      const matchesCategory =
        categoryFilterIds.length === 0 || categoryFilterIds.includes(product.category_id);

      return matchesBrand && matchesCategory;
    });
  }, [products, selectedFilters]);

  // Sort products based on sort option
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortOption) {
      case 'Price: Low to High':
        return sorted.sort((a, b) => {
          const aDiscountedPrice = parseFloat(a.price) * (1 - parseFloat(a.discount) / 100);
          const bDiscountedPrice = parseFloat(b.price) * (1 - parseFloat(b.discount) / 100);
          return aDiscountedPrice - bDiscountedPrice;
        });
      case 'Price: High to Low':
        return sorted.sort((a, b) => {
          const aDiscountedPrice = parseFloat(a.price) * (1 - parseFloat(a.discount) / 100);
          const bDiscountedPrice = parseFloat(b.price) * (1 - parseFloat(b.discount) / 100);
          return bDiscountedPrice - aDiscountedPrice;
        });
      case 'Name: A to Z':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'Name: Z to A':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted; // Return unchanged if no sort option
    }
  }, [filteredProducts, sortOption]);

  return sortedProducts;
};

export default useProductSortAndFilter;