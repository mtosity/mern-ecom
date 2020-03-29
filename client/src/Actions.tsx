export enum GlobalActionType {
  SetOpenLoginModalTrue = "Global/SetOpenLoginModalTrue",
  SetOpenLoginModalFalse = "Global/SetOpenLoginModalFalse",
  SetAuthenticatedTrue = "Global/SetAuthenticatedTrue",
  SetAuthenticatedFalse = "Global/SetAuthenticatedFalse",
  UserLoggedIn = "Global/UserLoggedIn",
  DoneLoading = "Global/DoneLoading",
}

export enum AccountActionType {
  AddAccount = "AccountActionType/AddAccount",
  DeleteAccount = "AccountActionType/DeleteAccount",
}

export enum CategoriesActionType {
  AddCategory = "CategoriesActionType/AddCategory"
}

export enum CartActionType {
  AddProduct = "CartActionType/AddProduct",
  SetCart = "CartActionType/SetCart",
  DeleteProduct = "CartActionType/DeleteProduct"
}