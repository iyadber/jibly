import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import PageTransition from '../components/ui/PageTransition';
import { Package, Clock, Truck, Map, CheckCircle } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('active');

    const orders = [
        { id: 101, user: 'محمد بن يحي', location: 'حي الياسمين', status: 'pending', desc: 'دواء من الصيدلية', time: '10:30' },
        { id: 102, user: 'هدى قادري', location: 'حي الصباح', status: 'assigned', desc: 'خضروات وفواكه', time: '10:15' },
        { id: 103, user: 'أمين زروال', location: 'وسط المدينة', status: 'completed', desc: 'توصيل مستندات', time: '09:45' },
    ];

    return (
        <PageTransition>
            <div className="pt-2 px-1">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">لوحة التحكم</h2>
                    <div className="bg-white/40 px-3 py-1 rounded-full text-xs font-bold text-gray-500">
                        Admin
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <GlassCard className="text-center py-4 bg-blue-500/10 border-blue-200 mb-0">
                        <h3 className="text-2xl font-bold text-blue-600">12</h3>
                        <p className="text-xs text-blue-400">طلبات نشطة</p>
                    </GlassCard>
                    <GlassCard className="text-center py-4 bg-green-500/10 border-green-200 mb-0">
                        <h3 className="text-2xl font-bold text-green-600">5</h3>
                        <p className="text-xs text-green-400">سائقين متاحين</p>
                    </GlassCard>
                </div>

                {/* Mock Map Placeholder */}
                <GlassCard className="h-40 bg-gray-200/50 flex items-center justify-center mb-6 relative overflow-hidden">
                    <Map className="text-gray-400 mb-2" size={32} />
                    <span className="text-gray-500 text-sm">خريطة السائقين (محاكاة)</span>
                    {/* Mock Dot */}
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-lg border-2 border-white animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full shadow-lg border-2 border-white"></div>
                </GlassCard>

                <h3 className="text-lg font-bold mb-3">آخر الطلبات</h3>
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === 'active' ? 'bg-primary text-white' : 'bg-white/30 text-gray-500'}`}
                    >
                        الجارية
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === 'history' ? 'bg-primary text-white' : 'bg-white/30 text-gray-500'}`}
                    >
                        السجل
                    </button>
                </div>

                <div className="space-y-3 pb-20">
                    {orders.map(order => (
                        <GlassCard key={order.id} className="mb-0 flex items-center gap-3">
                            <div className={`p-3 rounded-full ${order.status === 'pending' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'}`}>
                                {order.status === 'completed' ? <CheckCircle size={20} /> : <Package size={20} />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-sm">{order.user}</h4>
                                    <span className="text-xs text-gray-400">{order.time}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">{order.desc}</p>
                                <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-white/40 w-fit px-2 py-0.5 rounded">
                                    <MapPin size={10} />
                                    {order.location}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default Admin;
