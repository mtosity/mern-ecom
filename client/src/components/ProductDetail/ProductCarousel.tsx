import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SubImgType } from "../../DataType";
import "../../styles/carousel.min.css"

interface props {
  SubImgs: Array<SubImgType>;
}

export const ProductCarousel = ({ SubImgs }: props) => {
  return (
    <Carousel showStatus={false} infiniteLoop>
      {SubImgs.map(subimg => {
        return (
          <div key={subimg.id} style={{ backgroundColor: "#F5F5F5" }}>
            <img
              alt=""
              src={subimg.image}
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};
