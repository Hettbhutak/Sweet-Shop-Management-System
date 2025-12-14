import { Router } from 'express';
import { authenticate, isAdmin } from '../middleware/auth';
import { purchaseSweet, restockSweet } from '../controllers/inventoryController';

const router = Router();

router.post('/:id/purchase', authenticate, purchaseSweet);
router.post('/:id/restock', authenticate, isAdmin, restockSweet);

export default router;
