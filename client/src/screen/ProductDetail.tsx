import React from "react";
import { ProductCarousel } from "../components/ProductDetail/ProductCarousel";
import { ProductSectionTitle } from "../components/ProductDetail/ProductSectionTitle";
import { ProductPrice } from "../components/ProductDetail/ProductPrice";
import { ProductStarts } from "../components/ProductDetail/ProductStarts";
import { ProductSizes } from "../components/ProductDetail/ProductSizes";
import { ProductColors } from "../components/ProductDetail/ProductColors";
import { AddToCartBtn } from "../components/ProductDetail/AddToCartBtn";

export const ProductDetail = () => {
  return (
    <div className="w-full flex px-16">
      <div style={{ flex: 1 }}>
        <ProductCarousel />
      </div>
      <div style={{ flex: 3 }} className="ml-8">
        <p className="text-4xl jo-font font-extrabold tracking-wide">Proin Lectus Ipsum</p>
        <div className="flex justify-between">
            <ProductPrice price={120}/>
            <ProductStarts stars={4.5}/>
        </div>
        <ProductSectionTitle title="Quick Overview"/>
        <p className="">There are many variations of passages of Lorem Ipsum avaable, b majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. make an ami jani nab majority have suffered alteration in some form, variations of passages Lorem Ipsum avaable, b majority</p>
        <ProductSectionTitle title="Select Size"/>
        <ProductSizes/>
        <ProductSectionTitle title="Select Color"/>
        <ProductColors/>
        <AddToCartBtn/>
      </div>
    </div>
  );
};
