import { Sequelize } from 'sequelize';

// Ortam değişkenine bakmadan direkt SQLite kullanıyoruz
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // Proje kökünde oluşacak dosya
  logging: false
});

// Senkronizasyon
sequelize.sync({ alter: true })
  .then(() => console.log('SQLite DB senkronizasyonu tamamlandı.'))
  .catch(err => console.error('Sync hatası:', err));
