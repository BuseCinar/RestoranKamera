import Product from '../models/product.model.js';

// Tüm ürünleri listele
export const getAllProducts = async (_req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ürünler getirilemedi.' });
  }
};

// Yeni ürün oluştur (isteğe bağlı)
export const createProduct = async (req, res) => {
  try {
    const { id, name, category, price } = req.body;
    const p = await Product.create({ id, name, category, price });
    res.status(201).json(p);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Ürün oluşturulamadı.' });
  }
};
