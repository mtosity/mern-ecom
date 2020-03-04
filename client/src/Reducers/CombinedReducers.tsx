import { combineReducers, Reducer } from "redux";
import { AccountReducer, AccountStateInterface } from "./AccountReducer";
import { GlobalReducer, GlobalStateInterface } from "./GlobalReducer";

export interface ApplicationState {
  GlobalReducer: GlobalStateInterface;
  AccountReducer: AccountStateInterface;
}

export const CombinedReducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  AccountReducer,
  GlobalReducer
});
