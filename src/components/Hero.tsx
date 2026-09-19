import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Phone, 
  MapPin, 
  Home, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  FileText, 
  Camera, 
  Sparkles,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>EBC DIGITAL HUB — Jalna's Trusted Tech & Document Partner</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            "आपका काम, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">अब आसान!</span>"
          </motion.h1>

          {/* Secondary Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-4 max-w-3xl mx-auto leading-snug"
          >
            IT, Computer, Printer, Toner, CCTV और Online Document Services — <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy underline-offset-4">Jalna में भरोसेमंद सहायता</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            घर, दुकान या ऑफिस — जरूरत के अनुसार Home Service और Online Assistance. <br className="hidden sm:inline" />
            <span className="text-amber-300/90 font-medium">"Computer ki har problem ka solution! Suraksha har waqt!"</span>
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 shadow-xl shadow-emerald-700/30 transition-all border border-emerald-400/40 group"
            >
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Now</span>
              <span className="text-xs bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded-full font-medium ml-1">Fast Reply</span>
            </a>

            <a
              href={getPhoneCallLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-98 shadow-xl shadow-amber-500/20 transition-all group"
            >
              <Phone className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Call: {PHONE_NUMBER_DISPLAY}</span>
            </a>
          </motion.div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto py-3 px-4 bg-slate-900/80 border border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-200">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="text-amber-400 shrink-0" size={18} />
              <span className="font-semibold">Jalna & Nearby Areas</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-t sm:border-t-0 sm:border-l sm:border-r border-slate-800 pt-2 sm:pt-0">
              <MessageSquare className="text-emerald-400 shrink-0" size={18} />
              <span>WhatsApp: <strong className="text-white">{PHONE_NUMBER_DISPLAY}</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2 border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
              <Home className="text-amber-400 shrink-0" size={18} />
              <span className="font-semibold text-amber-300">Home / Office Visit Available</span>
            </div>
          </div>
        </div>

        {/* Two Large Main Category Gateways */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Gateway Card 1: IT & Security */}
          <div className="relative group bg-gradient-to-br from-slate-900 to-blue-950/90 border-2 border-blue-800/60 hover:border-amber-400/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/40">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-amber-400">
                <Wrench size={30} />
              </div>
              <span className="px-3 py-1 text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full">
                Doorstep & Shop
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors flex items-center gap-2">
              💻 IT & SECURITY SERVICES
            </h3>
            
            <p className="text-slate-300 text-sm mb-4">
              "Computer, Printer, Toner और CCTV की जरूरत? हमसे संपर्क करें."
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6 text-xs text-slate-300">
              {['Laptop Repair', 'Desktop Repair', 'Windows Setup', 'Data Recovery', 'Toner Refill', 'CCTV Setup', 'Wi-Fi / LAN', 'RAM / SSD Upgrade'].map((item) => (
                <span key={item} className="px-2.5 py-1 bg-slate-800/90 rounded-md border border-slate-700/60">
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#it-services"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Explore IT & CCTV Services</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={getWhatsAppLink("Hello EBC Digital Hub, मुझे IT / Computer / CCTV Service चाहिए.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Gateway Card 2: Online Documents */}
          <div className="relative group bg-gradient-to-br from-slate-900 to-indigo-950/90 border-2 border-indigo-800/60 hover:border-amber-400/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-900/40">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-amber-400">
                <FileText size={30} />
              </div>
              <span className="px-3 py-1 text-xs font-bold bg-indigo-400/20 text-indigo-300 border border-indigo-400/30 rounded-full">
                Private Online Assistance
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors flex items-center gap-2">
              📄 ONLINE DOCUMENT & DIGITAL SERVICES
            </h3>
            
            <p className="text-slate-300 text-sm mb-4">
              "Form, Certificate या Online Document से जुड़ा काम? WhatsApp पर अपना काम बताएं."
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6 text-xs text-slate-300">
              {['PAN Card Help', 'EPFO / PF Online', 'Income Certificate', 'Domicile', 'Caste Cert', '7/12 Land Record', 'Driving Licence Guidance', 'Scholarship Form'].map((item) => (
                <span key={item} className="px-2.5 py-1 bg-slate-800/90 rounded-md border border-slate-700/60">
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#online-documents"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Explore Online Document Services</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={getWhatsAppLink("Hello EBC Digital Hub, मुझे Online Document / Certificate Assistance चाहिए.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
