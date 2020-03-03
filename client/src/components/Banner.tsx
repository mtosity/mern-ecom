import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function Banner() {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10kzJvrj1gK0jSZFuXXcrHpXa.jpg_1200x1200Q100.jpg_.webp" />
      </div>
      <div>
        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10kzJvrj1gK0jSZFuXXcrHpXa.jpg_1200x1200Q100.jpg_.webp" />
      </div>
      <div>
        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB10kzJvrj1gK0jSZFuXXcrHpXa.jpg_1200x1200Q100.jpg_.webp" />
      </div>
    </Carousel>
  );
}
