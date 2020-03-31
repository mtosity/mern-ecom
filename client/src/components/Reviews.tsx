import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { SingleReview } from "./Reviews/SingleReview";

const reviews = [
  {
    name: "Johnathan",
    job: "Web Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
  },
  {
    name: "Johnathan",
    job: "Web Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
  },
  {
    name: "Johnathan",
    job: "Web Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quis dolorum, id recusandae quia ea nostrum optio quisquam iusto voluptatibus dolores expedita animi consequuntur possimus totam quibusdam praesentium ipsam!"
  }
];

export const Reviews = () => {
  const [section, setSecion] = useState(0);
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #f50057, #f42256, #f43356, #f33f56, #f24a57)"
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transform duration-700"
          style={{
            width: "300px",
            transform: `translateX(${section * -300}px)`
          }}
        >
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </div>
      </div>
      <div className="flex w-24 justify-between mt-8">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={section === 0 ? faCircleSolid : faCircle}
          color="white"
          onClick={() => setSecion(0)}
        />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={section === 1 ? faCircleSolid : faCircle}
          color="white"
          onClick={() => setSecion(1)}
        />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={section === 2 ? faCircleSolid : faCircle}
          color="white"
          onClick={() => setSecion(2)}
        />
      </div>
    </div>
  );
};
