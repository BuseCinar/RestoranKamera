import Table from '../models/table.model.js';
import Waiter from '../models/waiter.model.js';

export const getAllTables = async (_req, res) => {
  const tables = await Table.findAll({
    include: { model: Waiter, as: 'waiter' }
  });
  res.json(tables);
};

export const getTableById = async (req, res) => {
  try {
    const table = await Table.findByPk(req.params.id, { include: 'waiter' });
    if (!table) return res.status(404).json({ error: 'Table not found' });
    res.json(table);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTable = async (req, res) => {
  try {
    const newTable = await Table.create(req.body);
    res.status(201).json(newTable);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTable = async (req, res) => {
  try {
    const [updated] = await Table.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Table not found' });
    const updatedTable = await Table.findByPk(req.params.id);
    res.json(updatedTable);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTable = async (req, res) => {
  try {
    const deleted = await Table.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Table not found' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
