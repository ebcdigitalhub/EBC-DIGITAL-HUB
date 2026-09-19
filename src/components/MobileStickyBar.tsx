import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={getPhoneCallLink()}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-98"
        >
          <Phone size={18} className="text-slate-950" />
          <span>📞 Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-98"
        >
          <MessageSquare size={18} />
          <span>💬 WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
