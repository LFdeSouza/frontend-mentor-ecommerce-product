import React, { createContext, useContext, useState } from "react";

export interface IProductContext {
  products: IProduct[] | null;
}

interface IProduct {
  id: number;
  company: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: {
    thumbnail: string[];
    fullImage: string[];
  };
}

interface Props {
  children: React.ReactNode;
}
const ProductContext = createContext<IProductContext>({ products: null });
export const useProductsContext = () => useContext(ProductContext);

const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products] = useState<IProduct[]>([
    {
      id: 0,
      company: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      description: `These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything
      the weather can offer.`,
      price: 250.0,
      discount: 50,
      images: {
        thumbnail: [
          "image-product-1-thumbnail.jpg",
          "image-product-2-thumbnail.jpg",
          "image-product-3-thumbnail.jpg",
          "image-product-4-thumbnail.jpg",
        ],
        fullImage: [
          "image-product-1.jpg",
          "image-product-2.jpg",
          "image-product-3.jpg",
          "image-product-4.jpg",
        ],
      },
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
