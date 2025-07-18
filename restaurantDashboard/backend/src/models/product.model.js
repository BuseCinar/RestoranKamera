import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('sulu yemek','ızgara','çorba','salata','tatlı'),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'products',
  timestamps: false
});

export default Product;
