// src/components/ShopMenu.tsx
'use client';

import React, { useState } from 'react';
import ShopFilterButtons from './ShopFilterButtons';

interface ShopMenuProps {
  onSortSelect: (option: string) => void;
  onFiltersChange: (filters: string[]) => void;
}

const ShopMenu = ({ onSortSelect, onFiltersChange }: ShopMenuProps) => {
  return (
    <div className="rounded-2xl p-6 mt-8 mb-8 min-h-[75px]">
      <ShopFilterButtons onSortSelect={onSortSelect} onFiltersChange={onFiltersChange} />
    </div>
  );
};

export default ShopMenu;