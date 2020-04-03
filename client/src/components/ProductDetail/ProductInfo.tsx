import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { InfoDescription } from "./ProductInfo/InfoDescription";
import { InfoShipping } from "./ProductInfo/InfoShipping";
import { InfoTags } from "./ProductInfo/InfoTags";
import { InfoReviews } from "./ProductInfo/InfoReviews";

interface props {
  productID: string;
}

export const ProductInfo = ({productID}: props) => {
  const sections = ["description", "reviews", "shipping", "tags"];
  const [selectedSection, setSection] = useState("description");
  return (
    <div className="p-16 md:p-4 sm:p-4" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="grid grid-cols-4 sm:grid-cols-2">
        {sections.map(s => {
          return (
            <button
              key={s}
              className={classnames(
                "flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 md:px-4 py-1 uppercase mr-2 transform duration-300",
                selectedSection === s
                  ? "bg-red-600 text-white"
                  : "text-gray-800"
              )}
              onClick={() => setSection(s)}
            >
              {s}
            </button>
          );
        })}
      </div>
      <div className="p-16 bg-white mt-8 shadow-lg sm:p-2">
        {selectedSection === "description" ? (
          <InfoDescription />
        ) : selectedSection === "shipping" ? (
          <InfoShipping />
        ) : selectedSection === "tags" ? (
          <InfoTags />
        ) : selectedSection === "reviews" ? (
          <InfoReviews productID={productID}/>
        ) : (
          "SOMETHING WRONG"
        )}
      </div>
    </div>
  );
};
