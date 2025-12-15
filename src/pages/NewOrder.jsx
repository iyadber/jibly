import React, { useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import GlassCard from '../components/ui/GlassCard';
import { ArrowLeft, MapPin, Package, Clock, CheckCircle } from 'lucide-react';

const NewOrder = ({ type = 'custom', onBack }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    // Mock form handler
    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsDone(true);
        }, 2000);
    };

    if (isDone) {
        return (
            <PageTransition>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/50"
                    >
                        <CheckCircle size={48} />
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2">تم استلام طلبك!</h2>
                    <p className="text-gray-500 mb-8">سيتصل بك السائق قريباً لتأكيد التوصيل.</p>
                    <button
                        onClick={onBack}
                        className="w-full max-w-xs py-4 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 font-bold active:scale-95 transition-transform"
                    >
                        العودة للرئيسية
                    </button>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="flex items-center mb-6">
                <button onClick={onBack} className="p-2 rounded-full bg-white/50 backdrop-blur active:bg-white/80 transition-colors ml-4">
                    <ArrowLeft size={24} />
                </button>
                <h2 className="text-xl font-bold">طلب جديد</h2>
            </div>

            <div className="mb-6 flex justify-between px-8 text-gray-400 text-sm">
                <span className={step >= 1 ? "text-primary font-bold" : ""}>الوصف</span>
                <span className={step >= 2 ? "text-primary font-bold" : ""}>الموقع</span>
                <span className={step >= 3 ? "text-primary font-bold" : ""}>تأكيد</span>
            </div>

            {step === 1 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <GlassCard title="ماذا تريد أن توصل؟">
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-gray-600">اكتب طلبك بالتفصيل</label>
                            <textarea
                                className="w-full bg-white/50 border border-white/60 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-right h-32"
                                placeholder="مثال: خصني باط دواء من صيدلية بلقايد..."
                            ></textarea>
                        </div>

                        {type === 'groceries' && (
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2 text-gray-600">قائمة السلع</label>
                                {/* Mock Checklist */}
                                <div className="space-y-2">
                                    {['حليب', 'خبز', 'بيض'].map(item => (
                                        <div key={item} className="flex items-center gap-2 p-2 bg-white/30 rounded-lg">
                                            <input type="checkbox" className="w-5 h-5 accent-primary" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                    <button className="text-primary text-sm font-bold">+ إضافة عنصر</button>
                                </div>
                            </div>
                        )}
                    </GlassCard>
                </motion.div>
            )}

            {step === 2 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <GlassCard>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2 text-gray-600">من أين نستلم الطلب؟</label>
                            <div className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-white/60 text-gray-500">
                                <MapPin className="text-primary" />
                                <span>موقعي الحالي (حي الياسمين)</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-gray-600">إلى أين؟</label>
                            <input
                                type="text"
                                placeholder="حي الصباح، وهران"
                                className="w-full bg-white/50 border border-white/60 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                    </GlassCard>
                </motion.div>
            )}

            {step === 3 && (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <GlassCard className="text-center py-8">
                        <Package size={48} className="mx-auto text-primary mb-4" />
                        <h3 className="text-lg font-bold">ملخص الطلب</h3>
                        <p className="text-gray-500 mb-6">طلبية خاصة من حي الياسمين إلى حي الصباح</p>

                        <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg mb-2">
                            <span>تكلفة التوصيل التقريبية</span>
                            <span className="font-bold text-lg">350 دج</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg">
                            <span>وقت الوصول المتوقع</span>
                            <div className="flex items-center gap-1 font-bold">
                                <Clock size={16} />
                                <span>25 د</span>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            )}

            <div className="fixed bottom-[90px] left-0 w-full px-4">
                {step < 3 ? (
                    <button
                        onClick={() => setStep(step + 1)}
                        className="w-full py-4 bg-gray-900/80 backdrop-blur-md text-white rounded-2xl font-bold shadow-lg"
                    >
                        التالي
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
                    </button>
                )}
            </div>
        </PageTransition>
    );
};
import { motion } from 'framer-motion';
export default NewOrder;
