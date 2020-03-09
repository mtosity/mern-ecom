export interface CategoryType {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  id: number;
  email: string;
  password: string;
  roleId: number;
  name: string;
  address: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}
