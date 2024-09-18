import httpStatus from "http-status";
import sendResponse from "./src/app/utils/sendResponse";
import catchAsync from "./src/app/utils/catechAsync";

// Create a New Product
const createNewProduct = catchAsync(async (req, res) => {

    // const product = req.body;
    // const result = await ProductService.createdProducTtoDb(product);

    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "Product created successfully!",
    //     data: result,
    // })
})



// Retrieve a List of All Products
const getAllProductAndSearchTerm = catchAsync(async (req, res) => {

    // const searchTerm = req.query.searchTerm || '';
    // const result = await ProductService.getAllProductAndSearchTermFromDb(searchTerm as string);

    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "Product retrieve successfully!",
    //     data: result,
    // })
})

// Retrieve a Specific Product by ID
const getProductById = catchAsync(async (req, res) => {
    // const { productId } = req.params;
    // const result = await ProductService.getProductByIdFromDb(productId);

    // // send respone
    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "Product retrieve successfully!",
    //     data: result,
    // })
})

// Update Product Information
const updateProductById = catchAsync(async (req, res) => {
    // const { productId } = req.params;
    // const updatedData = req.body;
    // const updatedProduct = await ProductService.updateProductByIdFromDb(productId, updatedData);

    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "Product updated successfully!",
    //     data: updatedProduct,
    // })
})

// Soft Delete a Product
const softDeleteProductById = catchAsync(async (req, res) => {

    // const { productId } = req.params;
    // const deleteProduct = await ProductService.deletedProductByIdFromDb(productId);
    
    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "Product deleted successfully!",
    //     data: deleteProduct,
    // })
});


export const ProductController = {
    createNewProduct,
    getAllProductAndSearchTerm,
    getProductById,
    updateProductById,
    softDeleteProductById
}