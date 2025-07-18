import { Router } from 'express';
import { getAllWaiters, createWaiter } from '../controllers/waiter.controller.js';

const router = Router();

router.get('/', getAllWaiters);
router.post('/', createWaiter);

export default router;
