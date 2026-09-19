import React from 'react';
import { 
  MapPin, 
  Home, 
  MessageSquare, 
  Layers, 
  ThumbsUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Lock,
  AlertTriangle
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/servicesData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const WhyChooseUs: React.FC = () => {
  const stepsGeneral = [
    { num: "1", title: "Service चुनें", desc: "वेबसाइट पर अपनी जरूरत की IT, CCTV, टोनर या फॉर्म सर्विस देखें." },
    { num: "2", title: "WhatsApp पर जानकारी भेजें", desc: "1-क्लिक में WhatsApp पर मैसेज करें या समस्या का फोटो भेजें." },
    { num: "3", title: "आवश्यक जानकारी प्राप्त करें", desc: "हम आपको सही समाधान, जरूरी डॉक्युमेंट्स या विजिट टाइम कन्फर्म करेंगे." },
    { num: "4", title: "Service / Assistance लें", desc: "घर बैठे या शॉप पर विश्वसनीय सर्विस व सपोर्ट प्राप्त करें." }
  ];

  const stepsHomeVisit = [
    { num: "1", title: "Service Request", desc: "ऑनलाइन फॉर्म भरें या WhatsApp पर विजिट के लिए रिक्वेस्ट करें." },
    { num: "2", title: "Location Confirmation", desc: "जालना में अपना पता और सूटेबल टाइम स्लॉट शेयर करें." },
    { num: "3", title: "Appointment", desc: "हमारा कन्फर्मेशन मैसेज पाएं और विजिट का समय फिक्स करें." },
    { num: "4", title: "Technician Visit", desc: "एक्सपर्ट आपके पते पर आकर कंप्यूटर, टोनर या CCTV का काम पूरा करेंगे." }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold mb-3">
            <ThumbsUp size={14} />
            <span>TRUSTED LOCAL SERVICE IN JALNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose EBC DIGITAL HUB?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            हम किसी दूर के कॉल सेंटर से नहीं, बल्कि आपके अपने शहर जालना से काम करते हैं.
          </p>
        </div>

        {/* 5 Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-2xl p-5 border border-slate-800 hover:border-amber-400/60 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 text-amber-400 flex items-center justify-center mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              How It Works (सरल ४ स्टेप्स)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              बिना किसी परेशानी या तकनीकी जटिलता के आपकी समस्या का समाधान.
            </p>
          </div>

          {/* Workflow Tabs: Standard vs Home Service */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* General Flow */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span>⚡ Standard Service & Online Assistance</span>
              </h4>
              <div className="space-y-4">
                {stepsGeneral.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-blue-700">
                      {step.num}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">{step.title}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Service Flow */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <span>🏠 Home & Office Visit Process</span>
              </h4>
              <div className="space-y-4">
                {stepsHomeVisit.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-900 text-emerald-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700">
                      {step.num}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">{step.title}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security & Privacy Commitment Banner */}
        <div className="mt-12 bg-slate-950 rounded-2xl p-6 border-2 border-emerald-900/50 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-700 flex items-center justify-center text-emerald-400 shrink-0">
            <Lock size={28} />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="text-emerald-400" size={20} />
              सुरक्षा व गोपनीयता की गारंटी (Zero Fraud Policy)
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong>We will never ask you to share your OTP, password or banking PIN.</strong> आपके निजी दस्तावेज़ केवल संबंधित सेवा की आवश्यकता के अनुसार सुरक्षित रखे जाते हैं.
            </p>
            <p className="text-[11px] text-slate-400">
              कृपया संवेदनशील पहचान पत्र केवल हमारी गाइडेंस मिलने के बाद ही प्रेषित करें.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
