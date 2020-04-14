import { Reducer, Action } from "redux";
import { AccountActionType } from "../Actions";

export interface AccountStateInterface {
  id: string;
  email: string;
  role: string;
  name: string;
  avatar: string;
  address: string;
  phone:string;
}

const INIT_STATE: AccountStateInterface = {
  id: "",
  email: "",
  role: "",
  name: "",
  avatar: "",
  address: "",
  phone: ""
};

interface AccountActionInterface extends Action {
  payload?: AccountStateInterface;
}

export const AccountReducer: Reducer<
  AccountStateInterface,
  AccountActionInterface
> = (state = INIT_STATE, action: AccountActionInterface) => {
  switch (action.type) {
    case AccountActionType.AddAccount:
      return {...state, ...action.payload};
    case AccountActionType.DeleteAccount:
      return JSON.parse(JSON.stringify(INIT_STATE));
    default:
      return state;
  }
};
