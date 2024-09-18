// // Create a New Product
// const createdProducTtoDb = async ( product: TProduct) => {

// //   const existingProduct = await Product.findOne({ name: new RegExp(`^${product.name}$`, 'i') });
// //   if (existingProduct) {
// //     throw new Error(`${product.name} already exists`);
// //   }

//   const result = await Product.create(product);
//   return result;
// }

// // Retrieve a List of All Products
// const getAllProductAndSearchTermFromDb = async (searchTerm?: string) => {
//   const searchRegExp = searchTerm ? new RegExp(searchTerm, 'i') : '';

//   const filter = {
//     $or: [
//       { name: { $regex: searchRegExp } },
//       { description: { $regex: searchRegExp } },
//       { category: { $regex: searchRegExp } },
//     ]
//   }

//   const products = await Product.find(filter);
//   return products;
// };

// // Retrieve a Specific Product by ID
// const getProductByIdFromDb = async (productId: string) => {
//   const result = await Product.findByIdAndUpdate({ _id: productId });
//   return result;
// }

// // Update Product Information
// const updateProductByIdFromDb = async (productId: string, updateProduct: any) => {
//   const result = await Product.findByIdAndUpdate({ _id: productId }, updateProduct, {new: true});
//   return result;
// }

// // Delete a Product
// const deletedProductByIdFromDb = async (productId: string) => {
//   const result = await Product.findByIdAndUpdate({_id: productId}, { isDeleted: true}, {new: true} );
//   return result;
// }

// export const ProductService = {
//   createdProducTtoDb,
//   getAllProductAndSearchTermFromDb,
//   getProductByIdFromDb,
//   updateProductByIdFromDb,
//   deletedProductByIdFromDb
// }