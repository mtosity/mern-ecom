import React, { useState, useRef } from "react";
import { PopupIcon } from "./PopupIcon";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { ProductType } from "../../DataType";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartActionType } from "../../Actions";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { uuid } from "uuidv4";
import swa2 from "sweetalert2";
import classNames from "classnames";
import useOutsideClick from "../../utils/useOutsideClick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
interface props {
  product: ProductType;
}

export const ProductCard = ({ product }: props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null);
  const userID = useSelector<ApplicationState, string>(
    (state) => state.AccountReducer.id
  );
  const [clicked, setClicked] = useState(false);
  useOutsideClick(ref, () => {
    setClicked(false);
  });
  return (
    <div>
      <div
        ref={ref}
        className="flex flex-col bg-white shadow-md mx-2 hover:shadow-2xl img-hover-darker relative group"
        onClick={async () => {
          setTimeout(() => {
            setClicked(true);
          }, 310);
        }}
      >
        <LazyLoadImage
          className=" object-cover w-64"
          style={{ height: "350px" }}
          src={product.image}
          alt=""
          effect="blur"
        />
        <div
          className={classNames(
            "absolute top-0 left-0 w-full flex justify-center items-center -translate-y-5 group-hover:translate-y-0 transform duration-500 ease-in-out sm:duration-300",
            clicked ? "sm:pointer-events-auto" : "sm:pointer-events-none"
          )}
          style={{ height: "80%" }}
        >
          <PopupIcon
            icon={faCartPlus}
            onClick={() => {
              setClicked(false);
              dispatch({
                type: CartActionType.AddProduct,
                payload: {
                  ...product,
                  color: "blue",
                  size: "M",
                  userID: userID,
                  quantity: 1,
                  id: uuid(),
                  productID: product.id,
                  productName: product.title,
                  price: product.salePrice,
                },
              });
              swa2.fire("Added to cart");
            }}
          />
          <PopupIcon
            icon={faHeart}
            onClick={() => {
              setClicked(false);
              swa2.fire("You loved the product, thank you ^^");
            }}
          />
          <PopupIcon
            icon={faEye}
            onClick={() => history.push(`/detail/${product.id}`)}
          />
        </div>
        <div className="w-64 px-1 py-2 h-24 flex flex-col justify-around">
          <Link
            to={`/detail/${product.id}`}
            className=" font-semibold inline-block ml-4 py-1 hover:text-red-700"
          >
            {product.title}
          </Link>
          <div className="flex justify-between px-4">
            <div className="flex">
              <p className="font-semibold ">${product.salePrice}</p>
              <p
                className="font-semibold line-through text-red-600"
                style={{ textDecoration: "line-through" }}
              >
                ${product.originPrice}
              </p>
            </div>
            <div>
              <p className="font-semibold ">{product.quantity} items left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
