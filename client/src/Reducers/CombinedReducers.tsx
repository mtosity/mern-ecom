import { combineReducers, Reducer } from "redux";
import { AccountReducer, AccountStateInterface } from "./AccountReducer";
import { GlobalReducer, GlobalStateInterface } from "./GlobalReducer";
import { CategoriesReducer, CategoriesStateInterface } from "./CategoriesReducer";
import { CartStateInterface, CartReducer } from "./CartReducer";

export interface ApplicationState {
  GlobalReducer: GlobalStateInterface;
  AccountReducer: AccountStateInterface;
  CategoriesReducer: CategoriesStateInterface;
  CartReducer: CartStateInterface;
}

export const CombinedReducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  AccountReducer,
  GlobalReducer,
  CategoriesReducer,
  CartReducer
});
