import React from 'react';
import styles from './FilterBar.module.scss';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  brands: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedBrand, 
  setSelectedBrand, 
  brands 
}) => {
  return (
    <div
      className={styles.filterContainer}
      role="search"
      aria-label="Product filters"
    >
      <div className={styles.searchGroup}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
          aria-label="Search products"
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>
      <div className={styles.filterGroup}>
        <label htmlFor="brand-select">Brand:</label>
        <select
          id="brand-select"
          aria-label="Select a smartphone brand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className={styles.brandSelect}
        >
          <option value="All">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;