import Waiter from '../models/waiter.model.js';

// Tüm garsonları listele
export const getAllWaiters = async (_req, res) => {
  const list = await Waiter.findAll();
  res.json(list);
};

// Yeni garson yarat
export const createWaiter = async (req, res) => {
  const { id, name } = req.body;
  const w = await Waiter.create({ id, name });
  res.status(201).json(w);
};
