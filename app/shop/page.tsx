// src/pages/ShopPage.tsx
'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';
import ShopBanner from '@/components/ShopBanner';
import ProductGrid from '@/components/ProductGrid';
import ShopMenu from '@/components/ShopMenu';

const ShopPage = () => {
  const [sortOption, setSortOption] = useState<string>(''); // Default: no sorting
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <Container className="">
      <ShopBanner />
      <ShopMenu
        onSortSelect={setSortOption}
        onFiltersChange={setSelectedFilters}
      />
      <ProductGrid sortOption={sortOption} selectedFilters={selectedFilters} />
    </Container>
  );
};

export default ShopPage;