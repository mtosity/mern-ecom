import React from "react";

export default function Banner() {
  return (
    <a
      style={{
        backgroundImage:
          "url(" +
          "https://laz-img-cdn.alicdn.com/images/ims-web/TB10kzJvrj1gK0jSZFuXXcrHpXa.jpg_1200x1200Q100.jpg_.webp" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height:'400px'
      }}
      className="w-full inline-block"
      href="#"
    >

    </a>
  );
}
