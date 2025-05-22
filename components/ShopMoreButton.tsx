// src/components/ShopMoreButton.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const ShopMoreButton = () => {
  return (
    <Link href="/shop">
      <button
        className="flex items-center justify-center gap-2 bg-shop_light_green text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full max-w-[180px]"
      >
        Shop More
      </button>
    </Link>
  );
};

export default ShopMoreButton;