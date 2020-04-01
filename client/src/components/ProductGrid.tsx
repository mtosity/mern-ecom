import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { ProductType } from "../DataType";

interface props {
  products: Array<ProductType>;
}

export const ProductGrid = ({ products }: props) => {
  return (
    <div
      className="w-full grid p-16 pb-16 md:px-8 sm:px-4
    grid-cols-4 lg:grid-cols-3 md:grid-cols-2
    gap-8 lg:gap-16 md:gap-16 sm:gap-4"
      style={{ justifyItems: "center" }}
    >
      {products.map(product => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};
