import React from 'react';
import { Home, PlusCircle, User, FileText } from 'lucide-react';
import classNames from 'classnames';

const BottomNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'home', icon: Home, label: 'الرئيسية' },
        { id: 'orders', icon: FileText, label: 'طلباتي' },
        { id: 'profile', icon: User, label: 'حسابي' },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full p-4 z-50">
            <div className="glass flex justify-around items-center h-[70px] px-2 bg-white/80">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={classNames(
                                "flex flex-col items-center justify-center w-full h-full transition-all duration-300",
                                isActive ? "text-primary scale-110" : "text-gray-400"
                            )}
                        >
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] mt-1 font-semibold">{tab.label}</span>
                            {isActive && (
                                <div className="absolute bottom-2 w-1 h-1 bg-primary rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Floating Action Button for New Order - Centered above */}
            <button
                onClick={() => onTabChange('new-order')}
                className="absolute bottom-[35px] left-1/2 transform -translate-x-1/2 
                   bg-gradient-to-r from-primary to-accent text-white 
                   w-14 h-14 rounded-full flex items-center justify-center 
                   shadow-lg border-4 border-white/50 backdrop-blur-sm
                   active:scale-95 transition-transform duration-200"
            >
                <PlusCircle size={32} />
            </button>
        </div>
    );
};

export default BottomNav;
