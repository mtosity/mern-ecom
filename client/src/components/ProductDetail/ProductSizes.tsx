import React, { useState } from "react";
import classnames from "classnames";

export const ProductSizes = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSize] = useState("M");
  return (
    <div className="flex items-center">
      {sizes.map(s => {
        return (
          <button
            className={classnames(
              "w-10 h-10 flex justify-center font-bold items-center  ml-4 jo-font focus:outline-none",
              selectedSize === s ? "bg-gray-900 text-white" : "bg-gray-300"
            )}
            key={s}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
};
