import React, { useEffect } from "react";

import { Banner } from "../components/Banner";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";
import { ProductList } from "../components/ProductList";
import { MiddleBanner } from "../components/MiddleBanner";
import { ProductSlider } from "../components/ProductSlider";
import { Reviews } from "../components/Reviews";
import { Advantages } from "../components/Advantages";
import { useDispatch } from "react-redux";
import { CategoriesActionType } from "../Actions";

export const Home = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("/api/category").then(res => {
      res.json().then(cate => {
        dispatcher({type: CategoriesActionType.AddCategory, payload: cate})
      })
    })
  }, [])
  return (
    <div className="w-full">
        <Banner />
        <FeatureCategories/>
        <MiddleTitle title="New Arrivals"/>
        <ProductList/>
        <MiddleBanner/>
        <MiddleTitle title="Featured Products"/>
        <ProductSlider/>
        <Reviews/>
        <Advantages/>
    </div>
  );
};
