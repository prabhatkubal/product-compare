export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  features : {
    display: string;
    processor: string;
    battery: string;
    storage: string;
  }
}

export interface ComparisonContextType {
  selectedProducts: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearComparison: () => void;
  isLimitReached: boolean;
}