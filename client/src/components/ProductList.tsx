import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";

export const ProductList = () => {
  return (
    <div className="w-full grid row-gap-8	px-16 pb-16 md:px-8 sm:px-4
    grid-cols-4 lg:grid-cols-3 md:grid-cols-2
    ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
