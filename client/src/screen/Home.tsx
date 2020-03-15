import React, { } from "react";

import {Banner} from "../components/Banner";
import {SideCate} from "../components/SideCate";
import { TopInfo } from "../components/TopInfo";

export const Home = () => {
  return (
    <div className="w-full">
      {/* navbar */}
      {/* banner and categories */}
      <a
        href=""
        className="w-full text-center text-blue-400 bg-gray-800 p-2 md:inline-block md:mt-2 hidden"
      >
        Categories
      </a>
      <div className="w-full flex">
        <div className="shadow-md">
          <Banner />
        </div>
      </div>
    </div>
  );
};
