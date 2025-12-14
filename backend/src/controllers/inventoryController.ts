import { Request, Response } from 'express';
import { Sweet } from '../models/Sweet';

export const purchaseSweet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sweet = await Sweet.findOne(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    if (sweet.quantity < 1) return res.status(400).json({ message: 'Out of stock' });
    sweet.quantity -= 1;
    await sweet.save();
    res.json({ message: 'Purchase successful', sweet });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const restockSweet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const sweet = await Sweet.findOne(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    sweet.quantity += Number(quantity);
    await sweet.save();
    res.json({ message: 'Restock successful', sweet });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
