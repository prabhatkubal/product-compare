import React, { useEffect, useRef } from 'react';
import { useComparison } from '../../context/ComparisonContext';
import styles from './ComparisonModal.module.scss';
import Button from '../Button/Button';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose }) => {
  const { selectedProducts, removeFromCompare } = useComparison();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && selectedProducts.length < 2) {
      onClose();
    }
  }, [selectedProducts.length, isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || selectedProducts.length === 0) return null;

  const comparisonRows = [
    { label: 'Price', key: 'price' },
    { label: 'Brand', key: 'brand' },
    { label: 'Display', key: 'features.display' },
    { label: 'Processor', key: 'features.processor' },
    { label: 'Battery', key: 'features.battery' },
    { label: 'Storage', key: 'features.storage' },
  ];

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 id="compare-modal-title">
            Compare Products ({selectedProducts.length})
          </h2>
          <Button
            ref={closeButtonRef}
            variant="danger"
            className={styles.closeBtn}
            size="sm"
            onClick={onClose}
            aria-label="Close comparison modal"
          >
            &times;
          </Button>
        </header>
        <div className={styles.tableContainer}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th className={styles.rowLabel} scope="col">
                  Features
                </th>

                {selectedProducts.map((product) => (
                  <th
                    key={product.id}
                    className={styles.productHeader}
                    scope="col"
                  >
                    <div className={styles.headerContent}>
                      <img src={product.image} alt="" aria-hidden="true" />
                      <h3>{product.name}</h3>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCompare(product.id)}
                        aria-label={`Remove ${product.name} from comparison`}
                      >
                        Remove
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th className={styles.rowLabel} scope="row">
                    {row.label}
                  </th>
                  {selectedProducts.map((product) => (
                    <td key={`${product.id}-${row.label}`}>
                      {row.label === "Price" ? (
                        <span className={styles.priceTag}>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0,
                          }).format(product.price)}
                        </span>
                      ) : row.key.includes(".") ? (
                        (product as any).features?.[row.key.split(".")[1]] ||
                        "-"
                      ) : (
                        (product as any)[row.key] || "-"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;