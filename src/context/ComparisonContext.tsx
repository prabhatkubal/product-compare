import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ComparisonContextType, Product } from "../types";

const ComparisonContext = createContext<ComparisonContextType | undefined>(
  undefined
);

export const ComparisonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(() => {
    const savedList = localStorage.getItem("comparison-list");
    return savedList ? JSON.parse(savedList) : [];
  });

  const isLimitReached = selectedProducts.length >= 3;

  useEffect(() => {
    localStorage.setItem("comparison-list", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addToCompare = (product: Product) => {
    if (isLimitReached) {
      return;
    }

    const alreadyAdded = selectedProducts.some(
      (item) => item.id === product.id
    );

    if (alreadyAdded) return;

    setSelectedProducts((currentList) => [...currentList, product]);
  };

  const removeFromCompare = (productId: string) => {
    setSelectedProducts((currentList) =>
      currentList.filter((item) => item.id !== productId)
    );
  };

  const clearComparison = () => {
    setSelectedProducts([]);
  };

  return (
    <ComparisonContext.Provider
      value={{
        selectedProducts,
        addToCompare,
        removeFromCompare,
        clearComparison,
        isLimitReached,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);

  if (!context) {
    throw new Error("useComparison must be used inside ComparisonProvider");
  }

  return context;
};
