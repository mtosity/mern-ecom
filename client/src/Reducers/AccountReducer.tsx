import { Reducer, Action } from "redux";
import { GlobalActionType, AccountActionType } from "../Actions";

export interface AccountStateInterface {
  email: string;
  roleId: number;
  name: string;
  avatar: string;
  address: string;
}

const INIT_STATE: AccountStateInterface = {
  email: "",
  roleId: -1,
  name: "",
  avatar: "",
  address: ""
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
      return action.payload;
    case AccountActionType.DeleteAccount:
      return JSON.parse(JSON.stringify(INIT_STATE));
    default:
      return state;
  }
};
