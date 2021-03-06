export interface CategoryType {
  id: string;
  name: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: string;
  title: string;
  description: string;
  quantity: number;
  image: string;
  originPrice: number;
  salePrice: number;
  categoryID: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserType {
  id: string;
  email: string;
  password: string;
  role: number;
  name: string;
  address: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubImgType {
  id: string;
  productID: string;
  image: string;
}

export interface CartType {
  id: string;
  productID: string;
  productName: string;
  price: number;
  userID: string;
  title: string;
  description: string;
  quantity: number;
  image: string;
  originPrice: number;
  salePrice: number;
  categoryID: string;
  gender: string;
  color: string;
  size: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewType {
  id: string;
  productID: string;
  userID: string;
  userName: string;
  cmt: string;
  stars: number;
  createdAt: string;
  updatedAt: string;
}
