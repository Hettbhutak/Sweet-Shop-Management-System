import { Router } from 'express';
import { authenticate, isAdmin } from '../middleware/auth';
import {
  addSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet
} from '../controllers/sweetController';

const router = Router();

router.post('/', authenticate, isAdmin, addSweet);
router.get('/', authenticate, getSweets);
router.get('/search', authenticate, searchSweets);
router.put('/:id', authenticate, isAdmin, updateSweet);
router.delete('/:id', authenticate, isAdmin, deleteSweet);

export default router;
