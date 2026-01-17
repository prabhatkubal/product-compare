import { Product } from '../types';

const getImagePath = (filename: string) => `/assets/images/${filename}`;

export const products: Product[] = [
  {
    id: "apple-iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 144900,
    image: getImagePath("iphone-16-pro-max.png"),
    features: {
      display: "6.9-inch Super Retina XDR OLED, 120Hz ProMotion",
      processor: "A18 Pro Chip (3nm)",
      battery: "4685 mAh, 29h Video Playback",
      storage: "256GB / 512GB / 1TB",
    },
  },
  {
    id: "apple-iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    price: 79900,
    image: getImagePath("iphone-16.png"),
    features: {
      display: "6.1-inch Super Retina XDR OLED, 60Hz",
      processor: "A18 Chip",
      battery: "3561 mAh, 22h Video Playback",
      storage: "128GB / 256GB / 512GB",
    },
  },
  {
    id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    price: 129999,
    image: getImagePath("samsung-s25-ultra.png"),
    features: {
      display: "6.9-inch Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Elite for Galaxy",
      battery: "5000 mAh, 45W Fast Charging",
      storage: "256GB / 512GB / 1TB",
    },
  },
  {
    id: "samsung-s25",
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    price: 74999,
    image: getImagePath("samsung-s25.png"),
    features: {
      display: "6.2-inch Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Elite",
      battery: "4000 mAh, 25W Charging",
      storage: "128GB / 256GB",
    },
  },
  {
    id: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro",
    brand: "Google",
    price: 106999,
    image: getImagePath("pixel-10-pro.webp"),
    features: {
      display: "6.3-inch Super Actua LTPO OLED, 120Hz",
      processor: "Google Tensor G5",
      battery: "4870 mAh, 30W Charging",
      storage: "128GB / 256GB / 512GB",
    },
  },
  {
    id: "google-pixel-10",
    name: "Google Pixel 10",
    brand: "Google",
    price: 75999,
    image: getImagePath("pixel-10.png"),
    features: {
      display: "6.3-inch Actua OLED, 60-120Hz",
      processor: "Google Tensor G5",
      battery: "4600 mAh, Extreme Battery Saver",
      storage: "128GB / 256GB",
    },
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 69999,
    image: getImagePath("oneplus-13.png"),
    features: {
      display: "6.82-inch 2K ProXDR LTPO 4.0, 120Hz",
      processor: "Snapdragon 8 Elite",
      battery: "6000 mAh, 100W SuperVOOC",
      storage: "256GB / 512GB",
    },
  },
  {
    id: "oneplus-13r",
    name: "OnePlus 13R",
    brand: "OnePlus",
    price: 42999,
    image: getImagePath("oneplus-13r.webp"),
    features: {
      display: "6.78-inch 1.5K AMOLED ProXDR, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      battery: "6000 mAh, 80W SuperVOOC",
      storage: "128GB / 256GB",
    },
  },
];