import React from "react";
import { ProductCarousel } from "../components/ProductDetail/ProductCarousel";
import { ProductSectionTitle } from "../components/ProductDetail/ProductSectionTitle";
import { ProductPrice } from "../components/ProductDetail/ProductPrice";
import { ProductStars } from "../components/ProductDetail/ProductStars";
import { ProductSizes } from "../components/ProductDetail/ProductSizes";
import { ProductColors } from "../components/ProductDetail/ProductColors";
import { AddToCartBtn } from "../components/ProductDetail/AddToCartBtn";
import { ShareBtns } from "../components/ProductDetail/ShareBtns";
import { ProductInfo } from "../components/ProductDetail/ProductInfo";

export const ProductDetail = () => {
  return (
    <div>
      <div className="w-full flex px-16 pb-16">
        <div style={{ flex: 1 }}>
          <ProductCarousel />
        </div>
        <div style={{ flex: 3 }} className="ml-8">
          <p className="text-4xl jo-font font-extrabold tracking-wide">
            Proin Lectus Ipsum
          </p>
          <div className="flex justify-between">
            <ProductPrice price={120} />
            <ProductStars stars={4.5} />
          </div>
          <ProductSectionTitle title="Quick Overview" />
          <pre className="">
            {/* There are many variations of passages of Lorem Ipsum avaable, b
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. make
            an ami jani nab majority have suffered alteration in some form,
            variations of passages Lorem Ipsum avaable, b majority */}
            {`Available In Black Crew NeckShort<br/>SleeveScreen<br/>Print100%<br/>Cotton`}
          </pre>
          <ProductSectionTitle title="Select Size" />
          <ProductSizes />
          <ProductSectionTitle title="Select Color" />
          <ProductColors />
          <div className="flex justify-between items-center mt-8">
            <AddToCartBtn />
            <ShareBtns />
          </div>
        </div>
      </div>
      <ProductInfo />
    </div>
  );
};
