import React, { useState } from "react";
import { ProductStars } from "../../../ProductStars";

export const ReviewStar = () => {
  const [stars, setStars] = useState("0");

  return (
    <div className="flex ml-2 mt-2">
      <input
        type="number"
        name="stars"
        id=""
        className="outline-none p-2"
        value={stars}
        onChange={e => {
          const value = e.target.value;
          if (value === "") {
            setStars("0");
          } else {
            setStars(value.slice(1, 2));
          }
        }}
      />
      {(parseFloat(stars) >= 0 && parseFloat(stars)) <= 5 ? (
        <ProductStars stars={parseFloat(stars)} />
      ) : (
        <div className="uppercase text-red-600 ml-2 h-full mt-2">
            Rate only from 0 to 5 stars
        </div>
      )}
    </div>
  );
};
