// src/pages/Home.tsx
'use client';

import React from 'react';
import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import ProductGrid from '@/components/ProductGrid';

const Home = () => {
  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid maxProducts={8} showShopMoreButton={true} />
    </Container>
  );
};

export default Home;