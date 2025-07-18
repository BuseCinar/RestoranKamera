import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Camera, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Calendar,
  MapPin,
  Eye,
  Utensils,
  Bell,
  Settings,
  Zap,
  Star,
  Activity
} from 'lucide-react';

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Masa 3 - Müşteri 1 dakikadır bekliyor', time: '2 dk önce', priority: 'high' },
    { id: 2, type: 'info', message: 'Garson Ahmet - Masa 1 servisi tamamlandı', time: '5 dk önce', priority: 'medium' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data with more dynamic content
  const tables = [
    { id: 1, status: 'occupied', waiter: 'Ahmet', orders: 3, total: 245, lastService: '10:30', customers: 2, duration: '45m' },
    { id: 2, status: 'empty', waiter: 'Ahmet', orders: 0, total: 0, lastService: '-', customers: 0, duration: '-' },
    { id: 3, status: 'occupied', waiter: 'Mehmet', orders: 2, total: 180, lastService: '10:45', customers: 4, duration: '25m' },
    { id: 4, status: 'waiting', waiter: 'Mehmet', orders: 1, total: 65, lastService: '11:00', customers: 3, duration: '5m' }
  ];

  const waiters = [
    { id: 1, name: 'Ahmet', performance: 92, tablesServed: 12, totalSales: 1250, avgResponseTime: '1.8 dk', rating: 4.8, todayTips: 85 },
    { id: 2, name: 'Mehmet', performance: 85, tablesServed: 10, totalSales: 980, avgResponseTime: '2.3 dk', rating: 4.5, todayTips: 72 }
  ];

  const todayStats = {
    totalRevenue: 2847,
    ordersCompleted: 47,
    avgOrderValue: 68,
    customerSatisfaction: 94
  };

  const menuItems = [
    { category: 'Sulu Yemek', items: [
      { name: 'Kuru Fasulye', sold: 15, revenue: 180 },
      { name: 'Nohut', sold: 12, revenue: 144 },
      { name: 'Mercimek', sold: 8, revenue: 96 }
    ]},
    { category: 'Izgara', items: [
      { name: 'Tavuk Şiş', sold: 22, revenue: 440 },
      { name: 'Köfte', sold: 18, revenue: 324 },
      { name: 'Kanat', sold: 14, revenue: 210 }
    ]},
    { category: 'Çorba', items: [
      { name: 'Mercimek', sold: 25, revenue: 125 },
      { name: 'Yayla', sold: 16, revenue: 96 },
      { name: 'Tavuk', sold: 11, revenue: 77 }
    ]}
  ];

  const getTableStatusStyle = (status) => {
    switch(status) {
      case 'occupied': 
        return 'bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border-emerald-400/50 shadow-emerald-500/25';
      case 'waiting': 
        return 'bg-gradient-to-br from-red-400/20 to-red-600/20 border-red-400/50 shadow-red-500/25 animate-pulse';
      case 'empty': 
        return 'bg-gradient-to-br from-slate-400/10 to-slate-600/10 border-slate-400/30 shadow-slate-500/10';
      default: 
        return 'bg-gradient-to-br from-slate-400/10 to-slate-600/10 border-slate-400/30';
    }
  };

  const getPerformanceGradient = (score) => {
    if (score >= 90) return 'from-emerald-500 to-teal-500';
    if (score >= 80) return 'from-blue-500 to-cyan-500';
    if (score >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const DashboardView = () => (
    <div className="space-y-8">
      {/* Hero Stats Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-emerald-500/50">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Günlük Hasılat</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {todayStats.totalRevenue.toLocaleString()}₺
              </p>
              <p className="text-sm text-emerald-600 font-medium">↗️ +12% dün</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-blue-500/50">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Tamamlanan Sipariş</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {todayStats.ordersCompleted}
              </p>
              <p className="text-sm text-blue-600 font-medium">↗️ +8% dün</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-purple-500/50">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Ortalama Sipariş</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {todayStats.avgOrderValue}₺
              </p>
              <p className="text-sm text-purple-600 font-medium">↗️ +15% dün</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-amber-500/50">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Müşteri Memnuniyeti</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                %{todayStats.customerSatisfaction}
              </p>
              <p className="text-sm text-amber-600 font-medium">↗️ +3% dün</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      {alerts.length > 0 && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-lg"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Acil Uyarılar</h3>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="space-y-3">
              {alerts.map(alert => (
                <div key={alert.id} className={`p-4 rounded-xl border-l-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                  alert.type === 'warning' 
                    ? 'bg-yellow-500/10 border-yellow-400 shadow-yellow-500/20' 
                    : 'bg-blue-500/10 border-blue-400 shadow-blue-500/20'
                } shadow-lg`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      {alert.priority === 'high' && <Zap className="w-5 h-5 text-red-500" />}
                      <p className="font-medium text-gray-800">{alert.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tables Layout */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            Restoran Layout & Masa Durumu
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Garson Ahmet Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Garson Ahmet</h4>
                  <p className="text-sm text-gray-600">Masa 1-2 Sorumlusu</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold text-yellow-600">{waiters[0].rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {tables.slice(0, 2).map(table => (
                  <div key={table.id} className={`p-6 rounded-2xl border backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${getTableStatusStyle(table.status)}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center font-bold text-gray-800">
                          {table.id}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">Masa {table.id}</h5>
                          <p className="text-sm text-gray-600">{table.customers} Müşteri</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          table.status === 'occupied' ? 'bg-emerald-500/20 text-emerald-700' :
                          table.status === 'waiting' ? 'bg-red-500/20 text-red-700' :
                          'bg-gray-500/20 text-gray-700'
                        }`}>
                          {table.status === 'occupied' ? 'Aktif' : table.status === 'waiting' ? 'Bekliyor' : 'Boş'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-600">Sipariş</p>
                        <p className="font-bold text-gray-800">{table.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Tutar</p>
                        <p className="font-bold text-gray-800">{table.total}₺</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Süre</p>
                        <p className="font-bold text-gray-800">{table.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Garson Mehmet Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Garson Mehmet</h4>
                  <p className="text-sm text-gray-600">Masa 3-4 Sorumlusu</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold text-yellow-600">{waiters[1].rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {tables.slice(2, 4).map(table => (
                  <div key={table.id} className={`p-6 rounded-2xl border backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${getTableStatusStyle(table.status)}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center font-bold text-gray-800">
                          {table.id}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">Masa {table.id}</h5>
                          <p className="text-sm text-gray-600">{table.customers} Müşteri</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          table.status === 'occupied' ? 'bg-emerald-500/20 text-emerald-700' :
                          table.status === 'waiting' ? 'bg-red-500/20 text-red-700' :
                          'bg-gray-500/20 text-gray-700'
                        }`}>
                          {table.status === 'occupied' ? 'Aktif' : table.status === 'waiting' ? 'Bekliyor' : 'Boş'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-600">Sipariş</p>
                        <p className="font-bold text-gray-800">{table.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Tutar</p>
                        <p className="font-bold text-gray-800">{table.total}₺</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Süre</p>
                        <p className="font-bold text-gray-800">{table.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CameraView = () => (
    <div className="space-y-8">
      {/* Camera Grid */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-slate-600/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-600 rounded-2xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">AI Kamera Sistemi</h3>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">Tüm Kameralar Aktif</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(cameraId => (
              <div key={cameraId} className="group">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-white">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-xs font-semibold text-white">Masa {cameraId}</span>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                    <Eye className="w-12 h-12 text-gray-400" />
                    
                    {/* Scanning Animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Garson: {cameraId <= 2 ? 'Ahmet' : 'Mehmet'}
                        </p>
                        <p className="text-xs text-gray-300">
                          Son tespit: {new Date().toLocaleTimeString('tr-TR')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-400 font-medium">Aktif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* AI Activity Log */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">AI Tespit Logları</h3>
            <div className="ml-auto">
              <div className="flex items-center gap-2 bg-emerald-500/20 rounded-lg px-3 py-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-emerald-700">Gerçek Zamanlı</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {[
              { time: '11:05:23', action: 'Masa 3 - Yemek tespit edildi: Tavuk Şiş x1, Pilav x1', type: 'food', priority: 'normal' },
              { time: '11:03:15', action: 'Masa 1 - Garson Ahmet QR kod ile tanındı', type: 'waiter', priority: 'normal' },
              { time: '11:01:45', action: 'Masa 4 - Müşteri 1 dakikadır bekliyor - Uyarı!', type: 'warning', priority: 'high' },
              { time: '10:58:32', action: 'Masa 2 - Hesap sıfırlama işareti tespit edildi', type: 'reset', priority: 'normal' },
              { time: '10:56:18', action: 'Masa 3 - Yeni müşteri oturdu, süre takibi başlatıldı', type: 'customer', priority: 'normal' },
              { time: '10:54:05', action: 'Masa 1 - Çorba servisi tamamlandı', type: 'food', priority: 'normal' }
            ].map((log, index) => (
              <div key={index} className="group">
                <div className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                  log.type === 'food' ? 'bg-emerald-500/10 border-emerald-400/50 hover:shadow-emerald-500/25' : 
                  log.type === 'waiter' ? 'bg-blue-500/10 border-blue-400/50 hover:shadow-blue-500/25' : 
                  log.type === 'warning' ? 'bg-red-500/10 border-red-400/50 hover:shadow-red-500/25' : 
                  log.type === 'customer' ? 'bg-purple-500/10 border-purple-400/50 hover:shadow-purple-500/25' :
                  'bg-gray-500/10 border-gray-400/50 hover:shadow-gray-500/25'
                } shadow-lg`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500 bg-white/50 px-2 py-1 rounded">{log.time}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        log.type === 'food' ? 'bg-emerald-500' : 
                        log.type === 'waiter' ? 'bg-blue-500' : 
                        log.type === 'warning' ? 'bg-red-500 animate-pulse' : 
                        log.type === 'customer' ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 flex-1">{log.action}</span>
                    {log.priority === 'high' && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ReportsView = () => (
    <div className="space-y-8">
      {/* Waiter Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {waiters.map(waiter => (
          <div key={waiter.id} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${getPerformanceGradient(waiter.performance)} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">{waiter.name}</h3>
                  <p className="text-gray-600">Garson Performans Raporu</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${getPerformanceGradient(waiter.performance)} bg-clip-text text-transparent`}>
                    {waiter.performance}%
                  </div>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-600 font-semibold">{waiter.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Utensils className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <p className="text-sm text-gray-600">Servis Edilen Masa</p>
                  <p className="text-2xl font-bold text-gray-800">{waiter.tablesServed}</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                  <p className="text-sm text-gray-600">Toplam Satış</p>
                  <p className="text-2xl font-bold text-gray-800">{waiter.totalSales}₺</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                  <p className="text-sm text-gray-600">Ortalama Yanıt</p>
                  <p className="text-2xl font-bold text-gray-800">{waiter.avgResponseTime}</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                  <p className="text-sm text-gray-600">Günlük Bahşiş</p>
                  <p className="text-2xl font-bold text-gray-800">{waiter.todayTips}₺</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Performans Skoru</span>
                  <span className="font-semibold text-gray-800">{waiter.performance}/100</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getPerformanceGradient(waiter.performance)} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${waiter.performance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Menu Analytics */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Menü Performans Analizi</h3>
            <div className="ml-auto">
              <div className="bg-emerald-500/20 text-emerald-700 px-4 py-2 rounded-xl font-semibold text-sm">
                Bugün Toplam: {menuItems.reduce((acc, cat) => acc + cat.items.reduce((sum, item) => sum + item.sold, 0), 0)} Satış
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuItems.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-500' :
                      index === 1 ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                      'bg-gradient-to-br from-blue-500 to-purple-500'
                    }`}>
                      <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">{category.category}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                        <div>
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-600">{item.sold} adet satıldı</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-800">{item.revenue}₺</p>
                          <div className="w-16 bg-white/20 rounded-full h-1 mt-1">
                            <div 
                              className={`h-1 rounded-full ${
                                index === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                                index === 1 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                                'bg-gradient-to-r from-blue-500 to-purple-500'
                              }`}
                              style={{ width: `${(item.sold / 25) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Toplam Satış</span>
                      <span className="font-bold text-gray-800">
                        {category.items.reduce((sum, item) => sum + item.revenue, 0)}₺
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Insights */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Günlük İçgörüler</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-400/30">
              <h4 className="font-semibold text-emerald-800 mb-2">En Çok Satan</h4>
              <p className="text-2xl font-bold text-emerald-700">Mercimek Çorbası</p>
              <p className="text-sm text-emerald-600">25 porsiyon</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30">
              <h4 className="font-semibold text-blue-800 mb-2">En Hızlı Masa</h4>
              <p className="text-2xl font-bold text-blue-700">Masa 1</p>
              <p className="text-sm text-blue-600">Ort. 1.5 dk</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
              <h4 className="font-semibold text-purple-800 mb-2">Peak Saat</h4>
              <p className="text-2xl font-bold text-purple-700">12:00-13:00</p>
              <p className="text-sm text-purple-600">23 sipariş</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/30">
              <h4 className="font-semibold text-orange-800 mb-2">Müşteri Dönüşü</h4>
              <p className="text-2xl font-bold text-orange-700">%87</p>
              <p className="text-sm text-orange-600">Bu hafta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Restoran AI Sistemi
                </h1>
                <p className="text-sm text-gray-600">Akıllı Yönetim Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-sm bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-700">
                  {currentTime.toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer group-hover:scale-110 transition-all duration-300">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                {alerts.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
                    {alerts.length}
                  </span>
                )}
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-all duration-300">
                <Settings className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3, gradient: 'from-blue-600 to-cyan-600' },
              { id: 'camera', label: 'AI Kamera', icon: Camera, gradient: 'from-purple-600 to-pink-600' },
              { id: 'reports', label: 'Analytics', icon: TrendingUp, gradient: 'from-emerald-600 to-teal-600' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold border-b-3 transition-all duration-300 ${
                  activeTab === tab.id
                    ? `border-blue-500 bg-gradient-to-r ${tab.gradient} bg-clip-text text-transparent`
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'camera' && <CameraView />}
        {activeTab === 'reports' && <ReportsView />}
      </main>
    </div>
  );
};

export default RestaurantDashboard;