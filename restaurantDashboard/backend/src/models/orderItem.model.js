// src/models/orderItem.model.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Order from './order.model.js';
import Product from './product.model.js';

const OrderItem = sequelize.define('OrderItem', {
  orderId:   { type: DataTypes.INTEGER, primaryKey: true },
  productId: { type: DataTypes.INTEGER, primaryKey: true },
  quantity:  { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'order_items',
  timestamps: false
});

// İlişkiler
OrderItem.belongsTo(Order,   { foreignKey: 'orderId',   as: 'order'   });
OrderItem.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
Order.hasMany(OrderItem,     { foreignKey: 'orderId',   as: 'items'   });
Product.hasMany(OrderItem,   { foreignKey: 'productId', as: 'orders'  });

// Export
export default OrderItem;
