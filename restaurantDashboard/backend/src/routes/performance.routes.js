import { Router } from 'express';
import {
  createOrder,
  addItemToOrder,
  completeOrder,
  getOrdersByDate
} from '../controllers/order.controller.js';

const router = Router();

router.post('/',        createOrder);
router.post('/:orderId/items', addItemToOrder);
router.put('/:orderId/complete', completeOrder);
router.get('/',         getOrdersByDate);

export default router;
