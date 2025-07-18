import { Router } from 'express';
import { handleCameraEvent } from '../controllers/camera.controller.js';

const router = Router();
router.post('/event', handleCameraEvent);

export default router;
