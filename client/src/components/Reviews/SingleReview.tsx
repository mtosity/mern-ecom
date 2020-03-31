import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SingleReview = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-black flex relative">
        <div className="p-4 w-24 h-24">
          <img
            src="https://preview.uideck.com/items/shopr-theme/assets/img/testimonial/img3.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="p-2 flex flex-col justify-center items-center">
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
            bottom: "-20px",
            left: "8px"
          }}
        ></div>
      </div>
      <div className=" relative" style={{ width: "300px" }}>
        <p className="mt-8 text-center text-white tracking-widest">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum
          optio quisquam iusto voluptatibus dolores expedita animi consequuntur
          possimus totam quibusdam praesentium 
        </p>
      </div>
    </div>
  );
};
