import { Router } from 'express';
import authRoutes from './routes/auth';
import sweetRoutes from './routes/sweets';
import inventoryRoutes from './routes/inventory';

const router = Router();

router.use('/auth', authRoutes);
router.use('/sweets', sweetRoutes);
router.use('/sweets', inventoryRoutes);

export default router;
