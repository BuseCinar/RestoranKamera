import Alert from '../models/alert.model.js'; // yeni model

// 1 dakika sonra çağırılacak
export const scheduleDelayAlert = async (tableId) => {
  setTimeout(async () => {
    // Eğer hala açık sipariş varsa
    const hasOpen = await Order.count({ where: { tableId, completedAt: null } });
    if (hasOpen) {
      await Alert.create({ tableId, type: 'service_delay', message: 'Servis gecikmesi', priority: 'high' });
      // Garson performansını azalt
      await decrementPerformance(/* ilgili waiterId */);
    }
  }, 60 * 1000);
};

// Mevcut serv delay uyarısını kaldır:
export const clearDelayAlert = async (tableId) => {
  await Alert.destroy({ where: { tableId, type: 'service_delay' } });
};
