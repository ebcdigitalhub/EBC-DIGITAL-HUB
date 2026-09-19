import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const quickTopics = [
    'Toner Refilling Home Service',
    'Laptop / Computer Repair',
    'CCTV Camera Installation',
    'PF / EPFO Online Help',
    'Income / Domicile Certificate'
  ];

  const handleSend = (topic?: string) => {
    const text = topic 
      ? `Hello EBC Digital Hub, मुझे "${topic}" के बारे में जानकारी चाहिए.`
      : customQuery.trim() 
        ? `Hello EBC Digital Hub, ${customQuery.trim()}`
        : "Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.";
    
    window.open(getWhatsAppLink(text), '_blank');
    setIsOpen(false);
    setCustomQuery('');
  };

  return (
    <div className="fixed bottom-18 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-slate-950 border-2 border-emerald-500/80 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                <MessageSquare size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">EBC Digital Hub</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online • Jalna, MH
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X size={18} />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300">
            <p className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 mb-3 leading-relaxed">
              नमस्ते! 👋 आपको क्या काम करवाना है? नीचे क्लिक करें या मैसेज लिखें:
            </p>

            <div className="space-y-1.5 mb-3">
              {quickTopics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(topic)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-emerald-950/60 hover:border-emerald-700/60 border border-slate-800 text-[11px] text-slate-200 flex items-center justify-between transition-colors"
                >
                  <span>{topic}</span>
                  <span className="text-emerald-400">→</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 pt-1">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                placeholder="अपना सवाल लिखें..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSend()}
                className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-3 pr-4 py-3 rounded-full shadow-2xl shadow-emerald-900/60 hover:scale-105 active:scale-95 transition-all border border-emerald-400/30"
        aria-label="WhatsApp Assistance"
      >
        <div className="relative">
          <MessageSquare size={24} className="fill-white/20" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
        </div>
        <div className="text-left hidden sm:block">
          <span className="text-xs font-black block leading-none">WhatsApp</span>
          <span className="text-[10px] text-emerald-200 leading-none">Instant Jalna Support</span>
        </div>
      </button>
    </div>
  );
};
