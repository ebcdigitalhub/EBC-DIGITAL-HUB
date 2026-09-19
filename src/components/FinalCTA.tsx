import React from 'react';
import { MessageSquare, Phone, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800 text-xs font-bold mb-4">
          <Sparkles size={14} />
          <span>INSTANT WHATSAPP ASSISTANCE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          "काम छोटा हो या जरूरी — <span className="text-amber-400">पहले WhatsApp करें.</span>"
        </h2>

        <p className="text-xl sm:text-2xl font-bold text-slate-200 mt-4">
          "आपको क्या काम करवाना है? हमें बताएं."
        </p>

        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          कंप्यूटर रिपेयर, टोनर रिफिलिंग, सीसीटीवी कैमरा या ऑनलाइन डॉक्यूमेंट फॉर्म — सीधे मैसेज भेजें और तुरंत रिप्लाई पाएं.
        </p>

        {/* Big WhatsApp CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xl font-black rounded-2xl shadow-2xl shadow-emerald-700/50 hover:scale-103 active:scale-98 transition-all border border-emerald-400/40"
          >
            <MessageSquare size={28} />
            <span>💬 WhatsApp Now</span>
          </a>

          <a
            href={getPhoneCallLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-slate-800 hover:bg-slate-750 text-white text-lg font-bold rounded-2xl border border-slate-700 hover:border-amber-400/60 shadow-xl transition-all"
          >
            <Phone size={22} className="text-amber-400" />
            <span>Call: {PHONE_NUMBER_DISPLAY}</span>
          </a>
        </div>

        {/* Location & Details */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-amber-400 text-base">{PHONE_NUMBER_DISPLAY}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin size={16} className="text-amber-400" />
            <span>Jalna, Maharashtra</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle size={16} />
            <span>Doorstep Home Visit Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
