import React, { useEffect, useState } from "react";
import { ProductCarousel } from "../components/ProductDetail/ProductCarousel";
import { ProductSectionTitle } from "../components/ProductDetail/ProductSectionTitle";
import { ProductPrice } from "../components/ProductDetail/ProductPrice";
import { ProductStars } from "../components/ProductDetail/ProductStars";
import { ProductSizes } from "../components/ProductDetail/ProductSizes";
import { ProductColors } from "../components/ProductDetail/ProductColors";
import { AddToCartBtn } from "../components/ProductDetail/AddToCartBtn";
import { ShareBtns } from "../components/ProductDetail/ShareBtns";
import { ProductInfo } from "../components/ProductDetail/ProductInfo";
import { RouteComponentProps } from "react-router-dom";
import { ProductType } from "../DataType";
import { useDispatch } from "react-redux";
import { CartActionType } from "../Actions";
import Swal from "sweetalert2";

interface props extends RouteComponentProps<{ id: string }> {}

export const ProductDetail = ({ match }: props) => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSize] = useState("M");
  const colors = ["red", "blue", "green", "black"];
  const [selectedColor, setColor] = useState("red");
  const [quantity, setQuantity] = useState("1");

  const dispatcher = useDispatch();
  const [product, setProduct] = useState<ProductType>({
    id: "",
    title: "",
    description: "",
    quantity: 0,
    image: "",
    originPrice: 0,
    salePrice: 0,
    categoryID: "",
    gender: "",
    createdAt: "",
    updatedAt: "",
  });
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const { id } = match.params;
    Promise.all([
      fetch(`/api/product/id/${id}`).then(res => res.json()),
      fetch(`/api/subimg/id/${id}`).then(res => res.json())
    ]).then(data => {
      setProduct(data[0][0]);
      setImgs(data[1]);
    });
  }, []);
  const addToCart = () => {
    const newproductCart = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity: parseInt(quantity)
    };
    dispatcher({ type: CartActionType.AddProduct, payload: newproductCart });
    Swal.fire("Added to cart!");
  };
  return (
    <div>
      <div className="w-full flex p-16 md:flex-col md:p-4">
        <div style={{ flex: 1 }}>
          <ProductCarousel SubImgs={imgs} />
        </div>
        <div style={{ flex: 5 }} className="ml-8">
          <p className="text-4xl jo-font font-extrabold tracking-wide">
            {product.title}
          </p>
          <div className="flex justify-between">
            <ProductPrice price={product.salePrice} />
            <ProductStars stars={4.5} />
          </div>
          <ProductSectionTitle title="Quick Overview" />
          <div>
            {/* There are many variations of passages of Lorem Ipsum avaable, b
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. make
            an ami jani nab majority have suffered alteration in some form,
            variations of passages Lorem Ipsum avaable, b majority */}
            {product.description.split(".").map(line => {
              return <p key={line}>{line}</p>;
            })}
          </div>
          <ProductSectionTitle title="Select quantity" />
          <input
            type="number"
            name=""
            id=""
            className="outline-none px-4 py-2"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <ProductSectionTitle title="Select Size" />
          <ProductSizes
            selectedSize={selectedSize}
            setSize={setSize}
            sizes={sizes}
          />
          <ProductSectionTitle title="Select Color" />
          <ProductColors
            selectedColor={selectedColor}
            setColor={setColor}
            colors={colors}
          />
          <div className="flex justify-between items-center mt-8">
            <AddToCartBtn onClick={addToCart} />
            <ShareBtns />
          </div>
        </div>
      </div>
      <ProductInfo />
    </div>
  );
};
