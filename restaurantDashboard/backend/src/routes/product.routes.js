import { Router } from 'express';
import { getAllProducts, createProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);  // isteğe bağlı

export default router;
