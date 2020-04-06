import { Reducer, Action } from "redux";
import { GlobalActionType } from "../Actions";

export interface GlobalStateInterface {
  OpenLoginModal: boolean;
  authenticated: boolean;
  loading: boolean;
}

const INIT_STATE: GlobalStateInterface = {
  OpenLoginModal: false,
  authenticated: false,
  loading: true
};

export const GlobalReducer: Reducer<GlobalStateInterface, Action> = (
  state = INIT_STATE,
  action: Action
) => {
  switch (action.type) {
    case GlobalActionType.SetOpenLoginModalTrue:
      return { ...state, OpenLoginModal: true };
    case GlobalActionType.SetOpenLoginModalFalse:
      return { ...state, OpenLoginModal: false };
    case GlobalActionType.SetAuthenticatedTrue:
      return { ...state, authenticated: true };
    case GlobalActionType.SetAuthenticatedFalse:
      return { ...state, authenticated: false };
    case GlobalActionType.UserLoggedIn:
      return { ...state, authenticated: true, OpenLoginModal: false };
      case GlobalActionType.UserLoggedOut:
        return { ...state, authenticated: false, OpenLoginModal: false };
    case GlobalActionType.DoneLoading:
      return { ...state, loading: false };
    default:
      return state;
  }
};
