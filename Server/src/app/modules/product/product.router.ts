import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidations } from './product.validation';
import { upload } from '../../utils/imageUpload';
import parseData from '../../middleware/parseData';
import { auth } from '../../middleware/auth';
const router = express.Router();


router.post('/',
    upload.single('productImage'),
    parseData,
    validateRequest(productValidations.createProduct),
    ProductController.createNewProduct
)

router.get('/', auth('admin'), ProductController.getAllProductAndSearchTerm)
router.get('/:productId', ProductController.getProductById)
router.put('/:productId', ProductController.updateProductById)
router.delete('/:productId', ProductController.deleteProductById)



export const ProductRoute = router;