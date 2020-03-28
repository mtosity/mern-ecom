import React, { useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-range/lib/utils";
import { ProductType } from "../DataType";

const product: ProductType = {
  id: "",
  title: "Qui Ratione Volup",
  description: "",
  originPrice: 0,
  salePrice: 49.0,
  image:
    "https://preview.uideck.com/items/shopr-theme/assets/img/products/img-08.jpg",
  quantity: 3,
  categoryID: "",
  gender: "",
  createdAt: "",
  updatedAt: ""
};

export const ProductSlider = () => {
  const jump = 270;
  const [x, setX] = useState(0);
  return (
    <div className=" w-full pb-16 px-16 ">
      <div className="flex items-center overflow-hidden pb-4 relative">
        <div
          className=" absolute cursor-pointer z-10 p-2 bg-red-400"
          onClick={() => setX((x + jump) % (4 * jump))}
          style={{ left: "5px" }}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
        </div>
        <div
          className="flex transform duration-700 px-8 py-8"
          style={{ transform: `translateX(${x}px)` }}
        >
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
        <div
          className="absolute right-0 p-2 cursor-pointer z-10 bg-red-400"
          onClick={() => setX((x - jump) % (4 * jump))}
          style={{ right: "5px" }}
        >
          <FontAwesomeIcon icon={faArrowRight} size="2x" color="white" />
        </div>
      </div>
    </div>
  );
};
