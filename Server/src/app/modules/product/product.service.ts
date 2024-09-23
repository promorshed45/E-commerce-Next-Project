/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "./product.model";
import { TProduct } from "./product.interface";
// import { addDocumentToIndex } from "../../utils/meilisearch";
import { TImageFiles } from "../../interface/image.interface";


// Create a New Product
const createdProducTtoDb = async ( payload: TProduct, images: TImageFiles) => {

  const existingProduct = await Product.findOne({ name: new RegExp(`^${payload.name}$`, 'i') });
  if (existingProduct) {
    throw new Error(`${payload.name} already exists`);
  }

  const { productImages } = images;
  payload.images = productImages.map((image) => image.path);


  const result = await Product.create(payload);

  // await addDocumentToIndex(result, "products")
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