import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://cdn.shopify.com/s/files/1/2024/0999/files/parallax_01n_9954b41f-0b9e-4811-a1b5-b0d2eec18423.jpg?v=1497598668"
        alt=""
        style={{
          width: "100vw",
          height: "500px",
          display: "block",
          objectFit: "cover",
        }}
      />
      <div
        className="absolute top-0 left-0 jo-font font md:mt-32"
        style={{ top: "120px", left: "50px" }}
      >
        <h1
          className="animated bounceInDown 
        font-medium text-lg md:text-sm"
        >
          UPTO 40% DISCOUNT ON WOMEN'S CLOTHING
        </h1>
        <p className="animated bounceInLeft delay-1s font-bold text-5xl md:text-2xl">
          Grand Summmer <span className=" text-red-400">Sale!</span>
        </p>
        <p
          className="animated bounceInUp text-lg mt-2"
          style={{ animationDelay: "1.5s" }}
        >
          The most gorgeous style ever made by professional designer
        </p>
        <Link
          to="/category/all"
          type="button"
          className=" mt-2 animated bounceInUp rounded delay-2s mt-8 outline-none bg-red-700
           hover:bg-red-600 cursor-pointer flex justify-center items-center"
          style={{
            width: "200px",
            height: "44px",
            color: "#f4f4f4",
          }}
        >
          START SHOPPING
        </Link>
      </div>
    </div>
  );
}
