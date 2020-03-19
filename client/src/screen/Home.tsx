import React from "react";

import { Banner } from "../components/Banner";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";
import { ProductList } from "../components/ProductList";
import { MiddleBanner } from "../components/MiddleBanner";
import { ProductSlider } from "../components/ProductSlider";

export const Home = () => {
  return (
    <div className="">
        <Banner />
        <FeatureCategories/>
        <MiddleTitle title="New Arrivals"/>
        <ProductList/>
        <MiddleBanner/>
        <MiddleTitle title="Featured Products"/>
        <ProductSlider/>
    </div>
  );
};
