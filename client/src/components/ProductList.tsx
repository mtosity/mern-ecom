import React from "react";
import { ProductCard } from "./Product/ProductCard";

export const ProductList = () => {
  return (
    <div>
      <div className="w-full flex justify-between px-16 pb-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full flex justify-between px-16 pb-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
