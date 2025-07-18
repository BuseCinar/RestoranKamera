import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Waiter = sequelize.define('Waiter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'waiters',
  timestamps: false
});

export default Waiter;
