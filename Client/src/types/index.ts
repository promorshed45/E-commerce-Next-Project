export interface IUser {
    _id: string
    name: string
    email: string
    phone: string
    role: string
    address?: string
    profileImage: string
    status?: string
    isDeleted?: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  export interface IInventory {
    quantity: number;
    inStock: boolean;
};


//   export interface IProduct {
//     name: string;
//     description: string;
//     price: number;
//     category: string;
//     // tags: string[];
//     productImage: string[];
//     // variants: Variant[];
//     inventory: Inventory;
//     isDeleted: boolean;
// };

export interface IProduct {
  _id?: string;
  images: string[];
  name: string;
  description: string;
  category: string;
  tags?: string[];
  variants?: { _id: string; value: string }[];
  price: number;
  inventory?: IInventory;
}