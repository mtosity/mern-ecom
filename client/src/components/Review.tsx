import React from "react";

export const Review = () => {
  return (
    <div
      className="w-full h-64 flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #f50057, #f42256, #f43356, #f33f56, #f24a57)"
      }}
    >
      <div
        className="bg-black flex relative"
      >
        <div className="p-2">
          <img
            src="https://preview.uideck.com/items/shopr-theme/assets/img/testimonial/img3.jpg"
            alt=""
            className="w-24 h-24"
          />
        </div>
        <div className="p-2 w-40 flex flex-col justify-center items-center">
          <p className="text-white font-bold jo-font text-xl text-center">
            Johnathan
          </p>
          <p className="text-gray-600">- Web Developer</p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-0 h-0"
          style={{
            borderTop: "30px solid black",
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            bottom: '-20px'
          }}
        ></div>
      </div>
    </div>
  );
};
