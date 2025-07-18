import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Waiter from './waiter.model.js';

const Table = sequelize.define('Table', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.ENUM('empty', 'occupied', 'waiting'),
    allowNull: false,
    defaultValue: 'empty'
  }
}, {
  tableName: 'tables',
  timestamps: false
});

// Bir masanın bir garsonu olur
Table.belongsTo(Waiter, { foreignKey: 'waiterId', as: 'waiter' });
Waiter.hasMany(Table, { foreignKey: 'waiterId', as: 'tables' });

export default Table;