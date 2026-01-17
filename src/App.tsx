import { useMemo, useState } from 'react';
import styles from './App.module.scss';
import { ComparisonProvider } from './context/ComparisonContext';
import ComparisonBar from './components/ComparisonBar/ComparisonBar';
import ComparisonModal from './components/ComparisonModal/ComparisonModal';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');

  const brandList = useMemo(() => {
    return Array.from(new Set(products.map(product => product.brand))).sort();
  }, []);

  const visibleProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesBrand =
      activeBrand === 'All' || product.brand === activeBrand;

    return matchesSearch && matchesBrand;
  });

  return (
    <ComparisonProvider>
      <div className={styles.appContainer}>
        <Header />

        <main className={styles.productsSection}>
          <FilterBar
            searchQuery={searchText}
            setSearchQuery={setSearchText}
            selectedBrand={activeBrand}
            setSelectedBrand={setActiveBrand}
            brands={brandList}
          />

          <div
            className={styles.productsGrid}
            role="list"
            aria-label="Product list"
          >
            {visibleProducts.length > 0 ? (
              visibleProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No products match your search.</p>
              </div>
            )}
          </div>
        </main>

        <ComparisonBar onCompareNow={() => setIsCompareOpen(true)} />

        <ComparisonModal
          isOpen={isCompareOpen}
          onClose={() => setIsCompareOpen(false)}
        />
      </div>
    </ComparisonProvider>
  );
}

export default App;
