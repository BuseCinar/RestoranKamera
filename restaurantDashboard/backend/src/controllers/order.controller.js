import Order     from '../models/order.model.js';
import OrderItem from '../models/orderItem.model.js';
import Product   from '../models/product.model.js';

export const createOrder = async (req, res) => {
  try {
    const { tableId } = req.body;
    const order = await Order.create({ tableId });
    return res.status(201).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Sipariş oluşturulamadı.' });
  }
};

export const addItemToOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { productId, quantity } = req.body;

    // Ürünün varlığını kontrol et (isteğe bağlı)
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: 'Ürün bulunamadı.' });

    // Eğer zaten aynı üründen varsa miktarı güncelle, yoksa yeni kayıt
    const [item, created] = await OrderItem.findOrCreate({
      where: { orderId, productId },
      defaults: { quantity }
    });
    if (!created) {
      item.quantity += quantity;
      await item.save();
    }

    return res.json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Sipariş kalemi eklenemedi.' });
  }
};

export const completeOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByPk(orderId);
    if (!order) return res.status(404).json({ error: 'Sipariş bulunamadı.' });

    order.completedAt = new Date();
    await order.save();
    return res.json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Sipariş tamamlanamadı.' });
  }
};

export const getOrdersByDate = async (req, res) => {
  try {
    const date = req.query.date; // YYYY-MM-DD
    const start = new Date(date);
    const end   = new Date(date);
    end.setDate(end.getDate() + 1);

    const orders = await Order.findAll({
      where: { createdAt: { 
        [Op.gte]: start, 
        [Op.lt]:  end 
      }},
      include: {
        model: OrderItem,
        as: 'items',
        include: { model: Product, as: 'product' }
      }
    });
    return res.json(orders);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Siparişler getirilemedi.' });
  }
};
