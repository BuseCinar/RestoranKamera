// src/models/order.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Table from './table.model.js';

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tableId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  completedAt: DataTypes.DATE
}, {
  tableName: 'orders',
  timestamps: false
});

// İlişkiler
Order.belongsTo(Table, { foreignKey: 'tableId', as: 'table' });
Table.hasMany(Order,  { foreignKey: 'tableId', as: 'orders' });

// Burada default export yapıyoruz:
export default Order;
