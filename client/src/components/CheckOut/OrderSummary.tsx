import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../Reducers/CombinedReducers";
import { CartStateInterface } from "../../Reducers/CartReducer";
import { CartType } from "../../DataType";
import { CartActionType } from "../../Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const OrderSummary = () => {
  const dispatcher = useDispatch();
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
    <div className="p-4 w-2/3 sm:w-full">
      <h1 className="text-center text-xl">Order Summary</h1>
      <div className="w-full border-b border-gray-600 mt-4 mb-8"></div>
      <div className="bg-white cursor-auto shadow-lg">
        {cart.length === 0 ? (
          <div className="h-20 p-4">No item</div>
        ) : (
          cart.map((product: CartType) => {
            return (
              <div className="p-2 flex w-full" key={`cart${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="h-64 w-64 object-contain sm:w-32 sm:h-48"
                />
                <div className="h-full overflow-hidden ml-2 flex flex-col items-start justify-center w-full">
                  <div className="flex w-full justify-between items-center">
                    <p
                      className="font-bold text-xl"
                      style={{ color: "#171717" }}
                    >
                      {product.title}
                    </p>

                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      color="red"
                      className="cursor-pointer"
                      onClick={() =>
                        dispatcher({
                          type: CartActionType.DeleteProduct,
                          payload: product,
                        })
                      }
                      size="lg"
                    />
                  </div>
                  <div className="flex text-gray-600 text-lg mt-2">
                    <p>Size:</p>
                    <p className="font-bold ml-1">{product.size}</p>
                    <p className="ml-2">Color:</p>
                    <p className="ml-1" style={{ color: product.color }}>
                      {product.color}
                    </p>
                  </div>
                  <div className="flex items-center text-lg mt-2">
                    <p className="text-gray-600 bg">
                      Quantity:{" "}
                      <span className="font-bold">{product.quantity}</span>
                    </p>
                    <div>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="ml-2 cursor-pointer"
                        size="lg"
                        color="red"
                        onClick={(e) => inscreaseProduct(product)}
                      />
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="ml-2 cursor-pointer"
                        size="lg"
                        color="red"
                        onClick={(e) => decreaseProduct(product)}
                      />
                    </div>
                  </div>

                  <p className="text-red-600 font-bold text-lg mt-2">
                    ${product.salePrice.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div className="flex-1 justify-center items-center text-red-600 font-bold p-2 border-t border-red text-sm">
          <p className="text-lg">Total: ${total}</p>
        </div>
      </div>
      <h1 className="text-center text-xl mt-8">Shipping Info</h1>
    </div>
  );
};
