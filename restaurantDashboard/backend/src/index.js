// backend/src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/db.js';
import routes from './routes/index.js';

import Product from './models/product.model.js';
import Order from './models/order.model.js';
import OrderItem from './models/orderItem.model.js';
import Table from './models/table.model.js';
import Waiter from './models/waiter.model.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Health-check
app.get('/api/health', (_req, res) => res.json({ status: 'OK' }));

// API rotaları
app.use('/api', routes);

// DB bağlantısı testi
sequelize.authenticate()
  .then(() => console.log('DB bağlantısı başarılı'))
  .catch(err => console.error('DB bağlantı hatası:', err));

// force: true ile tüm tabloları yeniden oluşturup seed’i çalıştır
sequelize.sync({ force: true })
  .then(async () => {
    console.log('Veritabanı senkronizasyonu tamamlandı (force: true).');

    // 1) Product seed
    const prodCount = await Product.count();
    if (prodCount === 0) {
      await Product.bulkCreate([
        { id: 1,  name: 'Kuru Fasulye',   category: 'sulu yemek', price: 18.0 },
        { id: 2,  name: 'Nohut',           category: 'sulu yemek', price: 16.0 },
        { id: 3,  name: 'Mercimek Çorbası',category: 'çorba',      price: 12.0 },
        { id: 4,  name: 'Yayla Çorbası',   category: 'çorba',      price: 14.0 },
        { id: 5,  name: 'Tavuk Şiş',       category: 'ızgara',     price: 25.0 },
        { id: 6,  name: 'Köfte',           category: 'ızgara',     price: 22.0 },
        { id: 7,  name: 'Kanat',           category: 'ızgara',     price: 20.0 },
        { id: 8,  name: 'Sezar Salata',    category: 'salata',     price: 18.0 },
        { id: 9,  name: 'Baklava',         category: 'tatlı',      price: 15.0 },
        { id: 10, name: 'Profiterol',      category: 'tatlı',      price: 17.0 }
      ]);
      console.log('10 ürün başarıyla oluşturuldu.');
    }

    // 2) Table–Waiter seed
    // Masalar
    const tableCount = await Table.count();
    if (tableCount === 0) {
      await Table.bulkCreate([
        { id: 1, number: 1, status: 'empty', waiterId: null },
        { id: 2, number: 2, status: 'empty', waiterId: null },
        { id: 3, number: 3, status: 'empty', waiterId: null },
        { id: 4, number: 4, status: 'empty', waiterId: null }
      ]);
      console.log('4 masa başarıyla oluşturuldu.');
    }
    // Garsonlar
    const waiterCount = await Waiter.count();
    if (waiterCount === 0) {
      await Waiter.bulkCreate([
        { id: 1, name: 'Ahmet' },
        { id: 2, name: 'Mehmet' }
      ]);
      console.log('2 garson başarıyla oluşturuldu.');
    }
    // Masalara atama
    await Table.update({ waiterId: 1 }, { where: { id: [1, 2] } });
    await Table.update({ waiterId: 2 }, { where: { id: [3, 4] } });
    console.log('Masalar garsonlara atandı.');
  })
  .catch(err => console.error('Sync hatası:', err));

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend çalışıyor: http://localhost:${PORT}`));
