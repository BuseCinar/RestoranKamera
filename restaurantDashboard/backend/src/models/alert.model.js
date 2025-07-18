import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Alert = sequelize.define('Alert', {
  id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tableId:    { type: DataTypes.INTEGER, allowNull: false },
  type:       { type: DataTypes.STRING, allowNull: false },
  message:    { type: DataTypes.STRING, allowNull: false },
  priority:   { type: DataTypes.STRING, allowNull: false },
  createdAt:  { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'alerts',
  timestamps: false
});

export default Alert;
