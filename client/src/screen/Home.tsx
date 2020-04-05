import React, { useEffect, useState } from "react";

import { Banner } from "../components/Banner";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";
import { ProductGrid } from "../components/ProductGrid";
import { MiddleBanner } from "../components/MiddleBanner";
import { ProductSlider } from "../components/ProductSlider";
import { Reviews } from "../components/Reviews";
import { Advantages } from "../components/Advantages";

export const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const urls = ["/api/product/featured", "/api/product/new"];
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
      (data) => {
        setNews(data[1]);
        setFeatured(data[0]);
      }
    );
  }, []);
  return (
    <div className="w-full">
      <Banner />
      <FeatureCategories />
      <MiddleTitle title="New Arrivals" />
      <ProductGrid products={news} />
      <MiddleBanner />
      <MiddleTitle title="Featured Products" />
      <ProductSlider products={featured} />
      <Reviews />
      <Advantages />
    </div>
  );
};
