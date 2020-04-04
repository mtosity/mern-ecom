import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CartStateInterface } from "../../Reducers/CartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { CartActionType } from "../../Actions";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { ProductType, CartType } from "../../DataType";

interface props {
  show: boolean;
}

export const CartDropDown = ({ show }: props) => {
  const dispatcher = useDispatch();
  const ref = useRef(null);
  const cart = useSelector<ApplicationState, CartStateInterface>(
    (state) => state.CartReducer
  );
  const prices = cart.map((product) => product.salePrice * product.quantity);
  const total =
    prices.length === 0
      ? 0
      : prices
          .reduce((accumulator, current) => accumulator + current)
          .toFixed(2);

  const inscreaseProduct = (product: CartType) => {
    dispatcher({
      type: CartActionType.IncreaseQuantityByOne,
      payload: product,
    });
  };

  const decreaseProduct = (product: CartType) => {
    if (product.quantity === 1) {
      dispatcher({ type: CartActionType.DeleteProduct, payload: product });
    } else {
      dispatcher({
        type: CartActionType.DecreaseQuantityByOne,
        payload: product,
      });
    }
  };

  return (
    <div
      style={{ top: "40px", maxHeight: "300px" }}
      className={classnames(
        "absolute top-0 right-0 z-30 flex flex-col items-end",
        show ? "block" : "hidden"
      )}
    >
      <div
        className=" w-0 h-0 shadow-lg"
        style={{
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
          borderBottom: "15px solid red",
        }}
      ></div>
      <div
        className="bg-white cursor-auto shadow-lg border border-red-600"
        ref={ref}
      >
        {cart.length === 0 ? (
          <div className="w-64 h-20 pt-4">No item</div>
        ) : (
          cart.map((product: CartType) => {
            return (
              <div
                className="p-2 flex"
                key={`cart${product.id}`}
                style={{ width: "350px" }}
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-32 w-32 object-contain"
                />
                <div className="h-full overflow-hidden ml-2 flex flex-col items-start justify-center">
                  <p className="font-bold text-lg">{product.title}</p>
                  <div className="flex text-gray-600 text-sm">
                    <p>Size:</p>
                    <p className="font-bold ml-1">{product.size}</p>
                    <p className="ml-2">Color:</p>
                    <p className="ml-1" style={{ color: product.color }}>
                      {product.color}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-600 text-sm bg">
                      Quantity:{" "}
                      <span className="font-bold">{product.quantity}</span>
                    </p>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="ml-2 cursor-pointer"
                      color="red"
                      onClick={(e) => inscreaseProduct(product)}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="ml-2 cursor-pointer"
                      color="red"
                      onClick={(e) => decreaseProduct(product)}
                    />
                  </div>

                  <p className="text-red-600 font-bold text-lg">
                    ${product.salePrice.toFixed(2)}
                  </p>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="red"
                    className="cursor-pointer mt-2"
                    onClick={() =>
                      dispatcher({
                        type: CartActionType.DeleteProduct,
                        payload: product,
                      })
                    }
                    size="lg"
                  />
                </div>
              </div>
            );
          })
        )}
        <div className="flex">
          <div className="flex-1 justify-center items-center bg-red-600 text-white font-bold p-2">
            <p>CHECK OUT</p>
          </div>
          <div className="flex-1 justify-center items-center text-red-600 font-bold p-2 border-t border-red text-sm">
            <p>Total: ${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
