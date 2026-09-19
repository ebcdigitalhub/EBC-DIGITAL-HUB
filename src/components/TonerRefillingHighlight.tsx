import React from 'react';
import { 
  Droplets, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Truck, 
  Sparkles, 
  Printer, 
  ShieldCheck, 
  Clock, 
  Home 
} from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const TonerRefillingHighlight: React.FC = () => {
  const tonerWhatsAppMessage = "Hello EBC Digital Hub, मुझे Toner Refilling की Home Service चाहिए.";

  const tonerHighlights = [
    { title: "Laser Printer Toner Refilling", desc: "High density dark black powder for HP, Canon, Brother, Samsung" },
    { title: "Cartridge Refilling", desc: "Clean refill with zero leakage, sharp line reproduction" },
    { title: "Print Quality Check", desc: "Test print verification before final delivery" },
    { title: "Cartridge Check", desc: "Inspection of gear, magnetic roller & wiper seals" },
    { title: "Drum Check & Replacement", desc: "Fix black dots, faded vertical lines with new OPC drums" },
    { title: "Printer Internal Cleaning", desc: "Waste toner removal and dust cleaning" },
    { title: "Office & Shop Regular Service", desc: "Priority support for accounts, schools, hospitals, shops" },
    { title: "Home / Office Pickup & Service", desc: "Doorstep doorstep pickup & on-site refill across Jalna" },
  ];

  return (
    <section id="toner-highlight" className="py-16 bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 text-slate-950 relative overflow-hidden shadow-2xl">
      {/* Decorative subtle patterns */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-yellow-300/30 blur-2xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-amber-600/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-4 border-slate-900 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headlines & Badges */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md">
                <Sparkles size={16} />
                <span>SPECIAL SERVICE HIGHLIGHT — JALNA</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  "Printer का Toner खत्म?"
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-amber-400 mt-2">
                  "अब Toner Refilling के लिए बाहर जाने की जरूरत नहीं."
                </p>
              </div>

              {/* Large Highlighted Text Box */}
              <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Droplets size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
                      TONER REFILLING
                    </h3>
                    <p className="text-base sm:text-lg font-extrabold tracking-wide uppercase mt-1 text-slate-950 flex items-center gap-1.5">
                      <Home size={18} />
                      HOME SERVICE AVAILABLE
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                HP, Canon, Brother, Samsung लेजर प्रिंटर का टोनर रिफिलिंग अब आपके घर, ऑफिस या दुकान पर उपलब्ध है. डार्क और क्रिस्प प्रिंटिंग क्वालिटी की गारंटी!
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(tonerWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-base shadow-xl shadow-emerald-900/50 transition-all hover:scale-102"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp for Toner Service</span>
                </a>

                <a
                  href={getPhoneCallLink()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-base border border-slate-700 transition-colors"
                >
                  <Phone size={18} className="text-amber-400" />
                  <span>Call: {PHONE_NUMBER_DISPLAY}</span>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">
                <CheckCircle size={14} />
                <span>Jalna Home Service Available • Fast Turnaround</span>
              </div>
            </div>

            {/* Right Column: Checkpoints & Models Grid */}
            <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Printer className="text-amber-400" size={22} />
                  <span className="font-bold text-white text-base">Toner Services Checklist</span>
                </div>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold">
                  Doorstep Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {tonerHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Supported Cartridge Models Box */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span className="text-amber-400 font-bold block mb-1">लोकप्रिय कार्ट्रिज मॉडल्स:</span>
                <p className="text-slate-400">
                  HP 88A, 12A, 78A, 36A, 05A • Canon 303, 328, 925, 051 • Brother TN-1000, TN-2365 • Samsung D111S, 101S आदि.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>📍 Covering all Jalna areas & MIDC</span>
                <a
                  href="#home-service"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Book Home Pickup →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
