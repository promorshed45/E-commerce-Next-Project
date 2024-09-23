import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidations } from './product.validation';
import { multerUpload } from '../../config/multer.config';
import { ImageFilesArrayZodSchema } from '../../zod/image.validation';
import validateImageFileRequest from '../../middleware/validateImageFileRequest';
import { parseBody } from '../../middleware/parseData';
const router = express.Router();


router.post('/',
    multerUpload.fields([{ name: 'productImages' }]),
    validateImageFileRequest(ImageFilesArrayZodSchema),
    parseBody,
    validateRequest(productValidations.createProduct),
    ProductController.createNewProduct
)

router.get('/', ProductController.getAllProductAndSearchTerm)
router.get('/:productId', ProductController.getProductById)
router.put('/:productId', ProductController.updateProductById)
router.delete('/:productId', ProductController.deleteProductById)



export const ProductRoute = router;