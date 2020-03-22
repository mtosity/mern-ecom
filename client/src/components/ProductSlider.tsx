import React, { useState } from "react";
import { ProductCard } from "./Product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-range/lib/utils";

export const ProductSlider = () => {
  const jump = 270;
  const [x, setX] = useState(0);
  return (
    <div className=" w-full pb-16 px-16 ">
      <div className="flex items-center overflow-hidden pb-4 relative" >
        <div
          className=" absolute cursor-pointer z-20 p-2 bg-red-400"
          onClick={() => setX((x + jump) % (4 * jump))}
          style={{left: '5px'}}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
        </div>
        <div
          className="flex transform duration-700 px-8 py-8"
          style={{ transform: `translateX(${x}px)` }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div
          className="absolute right-0 p-2 cursor-pointer z-20 bg-red-400"
          onClick={() => setX((x - jump) % (4 * jump))}
          style={{right: '5px'}}
        >
          <FontAwesomeIcon icon={faArrowRight} size="2x" color="white" />
        </div>
      </div>
    </div>
  );
};
