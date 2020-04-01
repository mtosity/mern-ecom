import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CartStateInterface } from "../../Reducers/CartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { CartActionType } from "../../Actions";
import useOutsideClick from "../../utils/useOutsideClick";

interface props {
  show: boolean;
}

export const CartDropDown = ({ show }: props) => {
  const ref = useRef(null);
  const cart = useSelector<ApplicationState, CartStateInterface>(
    state => state.CartReducer
  );

  const dispatcher = useDispatch();
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
          borderBottom: "15px solid white"
        }}
      ></div>
      <div className="bg-white cursor-auto shadow-lg" ref={ref}>
        {cart.length === 0 ? (
          <div
            className="w-64 h-20 pt-4"
          >
            No item
          </div>
        ) : (
          cart.map(product => {
            return (
              <div
                className="p-2 flex items-center"
                key={`cart${product.id}`}
                style={{ width: "350px" }}
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-32 w-32 object-contain"
                />
                <div className="h-full mt-2 overflow-hidden ml-2">
                  <p className="font-bold text-lg">{product.title}</p>
                  <div className="flex text-gray-600 text-sm">
                    <p>Size:</p>
                    <p className="font-bold ml-1">{product.size}</p>
                    <p className="ml-2">Color:</p>
                    <p className="ml-1" style={{ color: product.color }}>{product.color}</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Quantity: <span className="font-bold">{product.quantity}</span>
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    ${product.salePrice.toFixed(2)}
                  </p>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="red"
                    className="cursor-pointer mt-4"
                    onClick={() =>
                      dispatcher({
                        type: CartActionType.DeleteProduct,
                        payload: product
                      })
                    }
                    size="lg"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
