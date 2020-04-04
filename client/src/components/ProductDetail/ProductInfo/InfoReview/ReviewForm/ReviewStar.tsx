import React, { useState } from "react";
import { ProductStars } from "../../../ProductStars";

interface props {
  stars: string;
  setStars: Function;
}

export const ReviewStar = ({ stars, setStars }: props) => {
  return (
    <div className="flex ml-2 mt-2">
      <input
        type="number"
        name="stars"
        id=""
        className="outline-none p-2"
        value={stars}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "") {
            setStars("0");
          } else {
            if (e.target.value.slice(0, 1) === "0") {
              setStars(value.slice(1, 2));
            } else {
              setStars(value.slice(0, 1));
            }
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
