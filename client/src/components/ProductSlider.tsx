import React, { useState } from "react";
import { ProductCard } from "./Product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-range/lib/utils";

export const ProductSlider = () => {
  const jump = 240;
  const [x, setX] = useState(0);
  return (
    <div className="w-full px-16 flex items-center justify-between ">
      <div className=" cursor-pointer" onClick={() => setX(x + jump)}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
      </div>
      <div className="overflow-hidden" style={{ width: "900px"}}>
        <div
          className="flex transform duration-700"
          style={{ transform: `translateX(${x}px)` }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className=" cursor-pointer" onClick={() => setX(x - jump)}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
      </div>
    </div>
  );
};
