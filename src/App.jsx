import React, { useState } from 'react';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import NewOrder from './pages/NewOrder';
import Admin from './pages/Admin';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen text-text-dark font-cairo pb-[80px]">
      {/* Background Animation */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <main className="container mx-auto px-4 pt-6 max-w-md">
        {activeTab !== 'new-order' && activeTab !== 'admin' && (
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-white/40 flex items-center justify-center">
                <span className="text-xl">🛵</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">جيبلي</h1>
                <p className="text-xs text-slate-500">توصيل سريع في وهران</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md shadow-sm overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" />
            </div>
          </header>
        )}

        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'orders' && (
            <div key="orders" className="flex items-center justify-center h-64 glass">
              <p className="text-gray-500">قائمة الطلبات فارغة حالياً</p>
            </div>
          )}
          {activeTab === 'profile' && (
            <div key="profile" className="glass p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
              </div>
              <h2 className="text-xl font-bold mb-1">مستخدم تجريبي</h2>
              <p className="text-sm text-gray-500 mb-6">+213 550 00 00 00</p>

              <button
                onClick={() => setActiveTab('admin')}
                className="w-full py-3 bg-slate-800 text-white rounded-xl mb-3 shadow-lg"
              >
                لوحة تحكم المسؤول
              </button>
              <button className="w-full py-3 bg-white/50 text-red-500 rounded-xl">
                تسجيل الخروج
              </button>
            </div>
          )}
          {activeTab === 'new-order' && (
            <NewOrder key="new-order" onBack={() => setActiveTab('home')} />
          )}
          {activeTab === 'admin' && (
            <div key="admin">
              <button onClick={() => setActiveTab('profile')} className="mb-4 text-sm text-gray-500 flex items-center gap-2">
                ❮ رجوع
              </button>
              <Admin />
            </div>
          )}
        </AnimatePresence>
      </main>

      {activeTab !== 'new-order' && activeTab !== 'admin' && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
    </div>
  );
}

export default App;
