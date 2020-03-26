export interface CategoryType {
  id: string;
  name: string;
  gender:string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  quantity: number;
  image: string;
  originPrice: number;
  salePrice: number;
  categoryID: number;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserType {
  id: number;
  email: string;
  password: string;
  role: number;
  name: string;
  address: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}
