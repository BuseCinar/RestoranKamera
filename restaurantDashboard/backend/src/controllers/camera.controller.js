import { createOrder }       from './order.controller.js';
import { addItemToOrder }    from './order.controller.js';
import { completeOrder }     from './order.controller.js';
import { createAlert }       from './alert.controller.js';    // ileride
import { decrementPerformance, incrementPerformance } from './waiter.controller.js';

export const handleCameraEvent = async (req, res) => {
  try {
    const { tableId, waiterId, items } = req.body;
    // 1) Eğer bu masa için henüz açık bir order yoksa yeni sipariş aç
    let order = await Order.findOne({ where: { tableId, completedAt: null } });
    if (!order) {
      order = await createOrder({ body: { tableId } }, { json: o=>o }); 
    }

    // 2) Servis gecikmesi uyarısı kaldır (garson geldiğine göre): 
    //    createAlert’da type: 'service_delay', removeable:true gibi
    await clearDelayAlert(tableId);

    // 3) Garson performansını arttır
    await incrementPerformance(waiterId);

    // 4) Gelen “items” dizisini order’a ekle
    for (const { productId, quantity } of items) {
      await addItemToOrder(
        { params: { orderId: order.id }, body: { productId, quantity } },
        { json: ()=>{} }
      );
    }

    return res.json({ status: 'ok', orderId: order.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Camera event işlenemedi.' });
  }
};
