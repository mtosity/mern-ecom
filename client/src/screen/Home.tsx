import React, { useEffect, useState } from "react";

import { Banner } from "../components/Banner";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";
import { ProductGrid } from "../components/ProductGrid";
import { MiddleBanner } from "../components/MiddleBanner";
import { ProductSlider } from "../components/ProductSlider";
import { Reviews } from "../components/Reviews";
import { Advantages } from "../components/Advantages";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { UserType } from "../DataType";
import { AccountActionType, GlobalActionType } from "../Actions";

export const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const urls = ["/api/product/featured", "/api/product/new"];
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
      (data) => {
        setNews(data[1]);
        setFeatured(data[0]);
      }
    );
    const token = localStorage.getItem("auth-token");
    if (token) {
      const user: any = jwt.verify(token, process.env.REACT_APP_JWT || "");
      if (user) {
        const body = {
          email: user.email,
          password: user.password,
        };
        fetch("/api/user/load", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
          body: JSON.stringify(body), // body data type must match "Content-Type" header
        }).then((res) => {
          if (res.status === 200) {
            res.json().then((user) => {
              dispatch({
                type: AccountActionType.AddAccount,
                payload: user,
              });
              dispatch({ type: GlobalActionType.UserLoggedIn });
            });
          }
        });
      }
    }
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
