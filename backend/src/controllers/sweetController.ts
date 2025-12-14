import { Request, Response } from 'express';
import { Sweet } from '../models/Sweet';

export const addSweet = async (req: Request, res: Response) => {
  const { name, category, price, quantity } = req.body;
  try {
    const sweet = Sweet.create({ name, category, price, quantity });
    await sweet.save();
    res.status(201).json(sweet);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getSweets = async (_req: Request, res: Response) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchSweets = async (req: Request, res: Response) => {
  const { name, category, minPrice, maxPrice } = req.query;
  try {
    let query = Sweet.createQueryBuilder('sweet');
    if (name) query = query.andWhere('sweet.name ILIKE :name', { name: `%${name}%` });
    if (category) query = query.andWhere('sweet.category = :category', { category });
    if (minPrice) query = query.andWhere('sweet.price >= :minPrice', { minPrice });
    if (maxPrice) query = query.andWhere('sweet.price <= :maxPrice', { maxPrice });
    const sweets = await query.getMany();
    res.json(sweets);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSweet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, category, price, quantity } = req.body;
  try {
    const sweet = await Sweet.findOne(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    sweet.name = name ?? sweet.name;
    sweet.category = category ?? sweet.category;
    sweet.price = price ?? sweet.price;
    sweet.quantity = quantity ?? sweet.quantity;
    await sweet.save();
    res.json(sweet);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSweet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sweet = await Sweet.findOne(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    await sweet.remove();
    res.json({ message: 'Sweet deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
