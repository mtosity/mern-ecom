import React from "react";

import { Banner } from "../components/Banner";
import { SideCate } from "../components/SideCate";
import { TopInfo } from "../components/TopInfo";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";

export const Home = () => {
  return (
    <div className="w-full flex">
      <div className="shadow-md">
        <Banner />
        <FeatureCategories/>
        <MiddleTitle/>
      </div>
    </div>
  );
};
