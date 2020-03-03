import { Reducer, Action } from "redux";
import { GlobalActionType } from "../Actions";

export interface UserStateInterface {
  OpenLoginModal: boolean;
  authenticated: boolean;
}

const INIT_STATE: UserStateInterface = {
  OpenLoginModal: false,
  authenticated: false
};

const UserReducer: Reducer = (state = INIT_STATE, action: Action) => {
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
    default:
      return state;
  }
};

export default UserReducer;
