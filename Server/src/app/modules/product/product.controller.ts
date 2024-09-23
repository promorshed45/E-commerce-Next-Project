import { ProductService } from "./product.service";
import catchAsync from "../../utils/catechAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TImageFiles } from "../../interface/image.interface";
import { TProduct } from "./product.interface";

// Create a New Product
const createNewProduct = catchAsync(async (req, res) => {

    if (!req.files) {
        throw new AppError(400, 'Please upload an image');
      }

      const result = await ProductService.createdProducTtoDb(
          req.body as TProduct,
          req.files as TImageFiles
      );

      console.log("controller hote", result);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product created successfully!",
        data: result,
    })
})



// Retrieve a List of All Products
const getAllProductAndSearchTerm = catchAsync(async (req, res) => {

    const searchTerm = req.query.searchTerm || '';
    const result = await ProductService.getAllProductAndSearchTermFromDb(searchTerm as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product retrieve successfully!",
        data: result,
    })
})

// Retrieve a Specific Product by ID
const getProductById = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const result = await ProductService.getProductByIdFromDb(productId);

    // send respone
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product retrieve successfully!",
        data: result,
    })
})

// Update Product Information
const updateProductById = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const updatedData = req.body;
    const updatedProduct = await ProductService.updateProductByIdFromDb(productId, updatedData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct,
    })
})

// Delete a Product
const deleteProductById = catchAsync(async (req, res) => {

    const { productId } = req.params;
    const deleteProduct = await ProductService.deletedProductByIdFromDb(productId);
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product deleted successfully!",
        data: deleteProduct,
    })
});


export const ProductController = {
    createNewProduct,
    getAllProductAndSearchTerm,
    getProductById,
    updateProductById,
    deleteProductById
}