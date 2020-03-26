import { combineReducers, Reducer } from "redux";
import { AccountReducer, AccountStateInterface } from "./AccountReducer";
import { GlobalReducer, GlobalStateInterface } from "./GlobalReducer";
import { CategoriesReducer, CategoriesStateInterface } from "./CategoriesReducer";

export interface ApplicationState {
  GlobalReducer: GlobalStateInterface;
  AccountReducer: AccountStateInterface;
  CategoriesReducer: CategoriesStateInterface;
}

export const CombinedReducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  AccountReducer,
  GlobalReducer,
  CategoriesReducer
});
