import React from 'react';
import { useComparison } from '../../context/ComparisonContext';
import styles from './ComparisonBar.module.scss';
import Button from '../Button/Button';

interface ComparisonBarProps {
  onCompareNow: () => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ onCompareNow }) => {
  const { selectedProducts,removeFromCompare, clearComparison } = useComparison();

  if (selectedProducts.length === 0) return null;

  return (
    <div
      className={styles.bar}
      role="region"
      aria-label="Selected products for comparison"
    >
      <div className={styles.container}>
        <div className={styles.thumbnails}>
          <span className={styles.countText}>
            {selectedProducts.length} product
            {selectedProducts.length > 1 ? "s" : ""} selected
          </span>

          <div className={styles.list}>
            {selectedProducts.map((product) => (
              <div key={product.id} className={styles.thumbItem}>
                <img src={product.image} alt={product.name} />
                <button
                  className={styles.removeIcon} // small button on the thumbnail
                  onClick={() => removeFromCompare(product.id)}
                  aria-label={`Remove ${product.name}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="text"
            size="sm"
            onClick={clearComparison}
            className={styles.clearBtn}
          >
            Clear All
          </Button>

          <Button
            variant="primary"
            onClick={onCompareNow}
            className={styles.compareBtn}
            disabled={selectedProducts.length < 2}
          >
            Compare Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;