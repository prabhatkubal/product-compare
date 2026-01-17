import { useComparison } from "../../context/ComparisonContext";
import { Product } from "../../types";
import Button from "../Button/Button";
import styles from "./ProductCard.module.scss";


interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const {addToCompare, selectedProducts, removeFromCompare, isLimitReached} = useComparison();

    const isSelected = selectedProducts.some((p) => p.id === product.id);

    const toggleCompare = () => {
      if (isSelected) {
        removeFromCompare(product.id);
      } else {
        addToCompare(product);
      }
    };

  const handleKeyAction = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCompare();
    }
  };

    return (
      <article
        className={`${styles.card} ${isSelected ? styles.selected : ""}`}
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        aria-label={`${product.name} comparison card`}
        onKeyDown={handleKeyAction}
      >
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className={styles.content}>
          <span className={styles.brand}>{product.brand}</span>
          <h3 className={styles.title}>{product.name}</h3>

          <ul className={styles.features}>
            <li>{product.features.display}</li>
            <li>{product.features.processor}</li>
          </ul>

          <div className={styles.footer}>
            <span className={styles.price}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(product.price)}
            </span>

            <Button
              variant={isSelected ? "danger" : "primary"}
              onClick={toggleCompare}
              disabled={!isSelected && isLimitReached}
              aria-pressed={isSelected}
              aria-label={
                isSelected
                  ? `Remove ${product.name} from comparison`
                  : `Add ${product.name} to comparison`
              }
              className={`${styles.compareBtn} ${
                isSelected ? styles.btnActive : ""
              }`}
            >
              {isSelected ? "Remove" : "Compare"}
            </Button>
          </div>
        </div>
      </article>
    );
}

export default ProductCard;