import React, { useState } from "react";
import { ProductCard } from "./Product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-range/lib/utils";

export const ProductSlider = () => {
  const jump = 270;
  const [x, setX] = useState(0);
  return (
    <div className=" w-full pb-16 px-16 ">
      <div className="flex items-center justify-center overflow-hidden pb-4">
        <div
          className=" cursor-pointer z-10"
          onClick={() => setX((x + jump) % (4 * jump))}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </div>
        <div
          className="flex transform duration-700"
          style={{ transform: `translateX(${x}px)` }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div
          className=" cursor-pointer z-10"
          onClick={() => setX((x - jump) % (4 * jump))}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
        </div>
      </div>
    </div>
  );
};
