import { Reducer, Action, Dispatch } from "redux";
import {GlobalActionType} from '../Actions'

export interface GlobalStateInterface {
  OpenLoginModal: boolean
}

const INIT_STATE: GlobalStateInterface = {OpenLoginModal: false}

const GlobalReducer: Reducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case GlobalActionType.SetOpLoginModalTrue:
      return {OpenLoginModal: true};
    case GlobalActionType.SetOpLoginModalFalse:
      return {OpenLoginModal: false};
    default:
      return state;
  }
};

export default GlobalReducer;
