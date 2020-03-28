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

interface props extends RouteComponentProps<{ id: string }> {}

export const ProductDetail = ({ match }: props) => {
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
    updatedAt: ""
  });
  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const { id } = match.params;
    Promise.all([
      fetch(`/api/product/id/${id}`).then(res => res.json()),
      fetch(`/api/subimg/id/${id}`).then(res => res.json()),
    ]).then(data => {
      setProduct(data[0][0]);
      setImgs(data[1])
      setLoading(false);
    })
  }, []);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <div className="w-full flex p-16">
        <div style={{ flex: 1 }}>
          <ProductCarousel SubImgs={imgs}/>
        </div>
        <div style={{ flex: 1 }} className="ml-8">
          <p className="text-4xl jo-font font-extrabold tracking-wide">
            {product.title}
          </p>
          <div className="flex justify-between">
            <ProductPrice price={product.salePrice} />
            <ProductStars stars={4.5} />
          </div>
          <ProductSectionTitle title="Quick Overview" />
          <pre className="">
            {/* There are many variations of passages of Lorem Ipsum avaable, b
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. make
            an ami jani nab majority have suffered alteration in some form,
            variations of passages Lorem Ipsum avaable, b majority */}
            {product.description.split(".").map(line => {
              return <p>{line} <br/></p>
            })}
          </pre>
          <ProductSectionTitle title="Select Size" />
          <ProductSizes />
          <ProductSectionTitle title="Select Color" />
          <ProductColors />
          <div className="flex justify-between items-center mt-8">
            <AddToCartBtn />
            <ShareBtns />
          </div>
        </div>
      </div>
      <ProductInfo />
    </div>
  );
};
