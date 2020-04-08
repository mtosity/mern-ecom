import { Reducer, Action } from "redux";
import { CategoriesActionType } from "../Actions";
import { CategoryType } from "../DataType";

export interface CategoriesStateInterface extends Array<CategoryType> {}

const INIT_STATE: CategoriesStateInterface = [];

interface CategoriesActionInterface extends Action {
  payload: CategoriesStateInterface;
}

export const CategoriesReducer: Reducer<
  CategoriesStateInterface,
  CategoriesActionInterface
> = (state: CategoriesStateInterface = INIT_STATE, action: CategoriesActionInterface) => {
  switch (action.type) {
    case CategoriesActionType.AddCategory:
      return [...action.payload];
    default:
      return state;
  }
};
