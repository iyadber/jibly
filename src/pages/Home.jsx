import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import PageTransition from '../components/ui/PageTransition';
import { ShoppingBag, Box, MapPin, Zap } from 'lucide-react';

const services = [
    { id: 'delivery', title: 'توصيل طرد', icon: Box, color: 'text-blue-500', desc: 'إرسال أو استلام طرد' },
    { id: 'groceries', title: 'قضيان', icon: ShoppingBag, color: 'text-green-500', desc: 'خضروات، فواكه، مقاضي' },
    { id: 'custom', title: 'طلب خاص', icon: Zap, color: 'text-purple-500', desc: 'أي شيء آخر تحتاجه' },
];

const Home = () => {
    return (
        <PageTransition>
            <section className="mb-6">
                <GlassCard className="bg-gradient-to-r from-primary/80 to-secondary/80 text-white border-none py-6">
                    <h2 className="text-2xl font-bold mb-2">واش خاصك اليوم؟</h2>
                    <p className="opacity-90 text-sm">حنا نجيبولك كلش حتى لباب الدار.</p>
                </GlassCard>
            </section>

            <section>
                <h3 className="text-lg font-bold mb-4 px-2">الخدمات المتاحة</h3>
                <div className="grid grid-cols-1 gap-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <GlassCard key={service.id} delay={index * 0.1} className="flex items-center gap-4 active:scale-95 transition-transform" onClick={() => console.log(service.id)}>
                                <div className={`p-3 rounded-full bg-white/60 shadow-sm ${service.color}`}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{service.title}</h4>
                                    <p className="text-gray-500 text-xs">{service.desc}</p>
                                </div>
                                <div className="mr-auto">
                                    <div className="w-8 h-8 rounded-full bg-gray-100/50 flex items-center justify-center text-gray-400">
                                        ❮
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </section>

            <section className="mt-6">
                <h3 className="text-lg font-bold mb-4 px-2">آخر العروض</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                    <GlassCard className="min-w-[200px] snap-center bg-orange-100/50">
                        <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full">عرض جديد</span>
                        <h4 className="font-bold mt-2">توصيل مجاني</h4>
                        <p className="text-xs text-gray-500">للطلبات فوق 2000 دج</p>
                    </GlassCard>
                    <GlassCard className="min-w-[200px] snap-center bg-blue-100/50">
                        <span className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full">خصم 20%</span>
                        <h4 className="font-bold mt-2">مطاعم مختارة</h4>
                        <p className="text-xs text-gray-500">في منطقة وهران</p>
                    </GlassCard>
                </div>
            </section>
        </PageTransition>
    );
};

export default Home;
