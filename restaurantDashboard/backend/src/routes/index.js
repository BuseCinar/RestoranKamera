import { Router } from 'express';
import tableRoutes   from './table.routes.js';
import waiterRoutes  from './waiter.routes.js';
import productRoutes from './product.routes.js';
import orderRoutes from './order.routes.js';


const router = Router();

router.use('/tables',  tableRoutes);
router.use('/waiters', waiterRoutes);
router.use('/products', productRoutes);  // <--- burada ekledik
router.use('/orders',   orderRoutes);   

export default router;
