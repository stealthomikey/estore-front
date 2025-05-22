// src/components/SortFilterButtons.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import useCategoryAndBrandData from '../hooks/useCategoryAndBrandData';

// Define Brand and Category interfaces locally
interface Brand {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface SortFilterButtonsProps {
  onSortSelect: (option: string) => void;
  onFiltersChange: (filters: string[]) => void;
}

const SortFilterButtons = ({ onSortSelect, onFiltersChange }: SortFilterButtonsProps) => {
  const { categories, brands, loading, error } = useCategoryAndBrandData();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const sortTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const filterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen);
  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);

  const handleSortSelect = (option: string) => {
    onSortSelect(option);
    setIsSortOpen(false);
  };

  const handleFilterChange = (option: string) => {
    setSelectedFilters((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSaveFilters = () => {
    onFiltersChange(selectedFilters);
    setIsFilterOpen(false);
  };

  const filterOptions = [
    { label: 'Brand: All', value: 'brand-all' },
    ...brands.map((brand: Brand) => ({
      label: `Brand: ${brand.name}`,
      value: `brand-${brand.id}`,
    })),
    ...categories.map((category: Category) => ({
      label: `Category: ${category.name}`,
      value: `category-${category.id}`,
    })),
  ];

  const handleSortMouseLeave = () => {
    sortTimeoutRef.current = setTimeout(() => {
      setIsSortOpen(false);
    }, 200);
  };

  const handleFilterMouseLeave = () => {
    filterTimeoutRef.current = setTimeout(() => {
      setIsFilterOpen(false);
    }, 200);
  };

  const handleSortDropdownEnter = () => {
    if (sortTimeoutRef.current) {
      clearTimeout(sortTimeoutRef.current);
    }
  };

  const handleFilterDropdownEnter = () => {
    if (filterTimeoutRef.current) {
      clearTimeout(filterTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (sortTimeoutRef.current) clearTimeout(sortTimeoutRef.current);
      if (filterTimeoutRef.current) clearTimeout(filterTimeoutRef.current);
    };
  }, []);

  return (
    <div className="flex gap-4">
      <div className="relative">
        <button
          onClick={toggleSortDropdown}
          onMouseEnter={() => setIsSortOpen(true)}
          onMouseLeave={handleSortMouseLeave}
          className="bg-shop-dark-green/90 text-white/90 px-6 py-3 rounded-md text-base font-semibold hover:bg-shop-dark-green hover:text-white transition duration-200"
        >
          Sort
        </button>
        {isSortOpen && (
          <div
            className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg"
            onMouseEnter={handleSortDropdownEnter}
            onMouseLeave={handleSortMouseLeave}
          >
            <ul className="py-1">
              {['Price: Low to High', 'Price: High to Low', 'Name: A to Z', 'Name: Z to A'].map(
                (option) => (
                  <li key={option}>
                    <button
                      onClick={() => handleSortSelect(option)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={toggleFilterDropdown}
          onMouseEnter={() => setIsFilterOpen(true)}
          onMouseLeave={handleFilterMouseLeave}
          className="bg-shop-dark-green/90 text-white/90 px-6 py-3 rounded-md text-base font-semibold hover:bg-shop-dark-green hover:text-white transition duration-200"
        >
          Filter
        </button>
        {isFilterOpen && (
          <div
            className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg"
            onMouseEnter={handleFilterDropdownEnter}
            onMouseLeave={handleFilterMouseLeave}
          >
            {loading ? (
              <div className="px-4 py-2 text-sm text-gray-700">Loading...</div>
            ) : error ? (
              <div className="px-4 py-2 text-sm text-red-600">{error}</div>
            ) : (
              <>
                <ul className="py-1">
                  {filterOptions.map((option) => (
                    <li key={option.value} className="px-4 py-2">
                      <label className="flex items-center text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(option.value)}
                          onChange={() => handleFilterChange(option.value)}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-2 border-t border-gray-200">
                  <button
                    onClick={handleSaveFilters}
                    className="w-full bg-shop-dark-green/90 text-white/90 px-3 py-1 rounded-md text-sm font-semibold hover:bg-shop-dark-green hover:text-white transition duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortFilterButtons;