import { Product } from "./product.model";
import { TProduct } from "./product.interface";
import { imageUpload } from "../../utils/imageUpload";


// Create a New Product
const createdProducTtoDb = async ( file: any, payload: TProduct) => {

  const existingProduct = await Product.findOne({ name: new RegExp(`^${payload.name}$`, 'i') });
  if (existingProduct) {
    throw new Error(`${payload.name} already exists`);
  }

  
  // Extract name and email for imageName
  const { name, category } = payload;
  const imageName = `${name}_${category}`;

  // Assuming file.path is provided by the caller
  const path = file?.path;

 // Upload image to Cloudinary
 const { secure_url } : any = await imageUpload(imageName, path);
 

 // Set profileImage field in payload
 payload.productImage = secure_url;

  const result = await Product.create(payload);
  return result;
}

// Retrieve a List of All Products
const getAllProductAndSearchTermFromDb = async (searchTerm?: string) => {
  const searchRegExp = searchTerm ? new RegExp(searchTerm, 'i') : '';

  const filter = {
    $or: [
      { name: { $regex: searchRegExp } },
      { description: { $regex: searchRegExp } },
      { category: { $regex: searchRegExp } },
    ]
  }

  const products = await Product.find(filter);
  return products;
};

// Retrieve a Specific Product by ID
const getProductByIdFromDb = async (productId: string) => {
  const result = await Product.findByIdAndUpdate({ _id: productId });
  return result;
}

// Update Product Information
const updateProductByIdFromDb = async (productId: string, updateProduct: any) => {
  const result = await Product.findByIdAndUpdate({ _id: productId }, updateProduct, {new: true});
  return result;
}

// Delete a Product
const deletedProductByIdFromDb = async (productId: string) => {
  const result = await Product.findByIdAndUpdate({_id: productId}, { isDeleted: true}, {new: true} );
  return result;
}

export const ProductService = {
  createdProducTtoDb,
  getAllProductAndSearchTermFromDb,
  getProductByIdFromDb,
  updateProductByIdFromDb,
  deletedProductByIdFromDb
}