import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faHeadphonesAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const Advantages = () => {
  return (
    <div className="w-full flex justify-around py-16">
      <div className="w-1/4 border border-gray-400 p-4 flex items-center group overflow-hidden sm:flex-col sm:text-center">
        <FontAwesomeIcon
          icon={faPlaneDeparture}
          color="red"
          size="2x"
          className="transform duration-500 group-hover:-translate-y-8 group-hover:translate-x-8"
        />
        <p className="ml-4 sm:mt-2 sm:ml-0">Free Shipping Worldwide</p>
      </div>
      <div className="w-1/4 border border-gray-400 p-4 flex items-center group overflow-hidden sm:flex-col sm:text-center">
        <FontAwesomeIcon
          icon={faHeadphonesAlt}
          color="red"
          size="2x"
          className="transform duration-500 group-hover:rotate-45"
        />
        <p className="ml-4 sm:mt-2 sm:ml-0">24/7 Customer Service</p>
      </div>
      <div className="w-1/4 border border-gray-400 p-4 flex items-center group overflow-hidden sm:flex-col sm:text-center">
        <FontAwesomeIcon
          icon={faHeart}
          color="red"
          size="2x"
          className="transform duration-500 group-hover:rotate-45"
        />
        <p className="ml-4 sm:mt-2 sm:ml-0">Easy Return Policy</p>
      </div>
    </div>
  );
};
