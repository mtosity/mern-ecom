import { Reducer, Action } from "redux";
import { CartActionType } from "../Actions";
import { CartType } from "../DataType";

export interface CartStateInterface extends Array<CartType> {}

const INIT_STATE: CartStateInterface = Array<CartType>();

interface CartActionInterface extends Action {
  payload: CartType;
}

export const CartReducer: Reducer<CartStateInterface, CartActionInterface> = (
  state = INIT_STATE,
  action: CartActionInterface
) => {
  switch (action.type) {
    case CartActionType.AddProduct:
      return [...state, action.payload];
    case CartActionType.SetCart:
      return [...state, action.payload];
    case CartActionType.DeleteProduct:
      return state.filter((s) => s.id !== action.payload.id);
    case CartActionType.IncreaseQuantity:
      return state.map((s) => {
        if (s.id === action.payload.id) {
          s.quantity += action.payload.quantity;
        }
        return s;
      });
    case CartActionType.IncreaseQuantityByOne:
      return state.map((s) => {
        if (s.id === action.payload.id) {
          s.quantity += 1;
        }
        return s;
      });
    case CartActionType.DecreaseQuantityByOne:
      return state.map((s) => {
        if (s.id === action.payload.id) {
          s.quantity -= 1;
        }
        return s;
      });
    default:
      return state;
  }
};
