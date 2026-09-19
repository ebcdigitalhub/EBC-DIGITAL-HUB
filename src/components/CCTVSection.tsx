import React from 'react';
import { 
  Camera, 
  Smartphone, 
  ShieldCheck, 
  Eye, 
  HardDrive, 
  Wrench, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Building, 
  Store, 
  Home, 
  Radio 
} from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const CCTVSection: React.FC = () => {
  const cctvWhatsAppMessage = "Hello EBC Digital Hub, मुझे CCTV installation/service के बारे में जानकारी चाहिए.";

  const cctvFeatures = [
    { icon: Camera, title: "CCTV Camera Installation", desc: "Professional wiring, angle positioning & neat concealed setup" },
    { icon: Eye, title: "HD & 4MP Clear Cameras", desc: "Crystal clear facial recognition & number plate visibility" },
    { icon: Home, title: "Indoor & Dome Cameras", desc: "Compact aesthetic cameras for living rooms, bedrooms, billing counters" },
    { icon: ShieldCheck, title: "Outdoor Weatherproof", desc: "IP66/IP67 rated cameras resistant to heavy rain, dust, and heat" },
    { icon: Radio, title: "Night Vision / ColorVu", desc: "Full color or infrared night vision in total pitch darkness" },
    { icon: Smartphone, title: "Mobile Live View (Online)", desc: "Watch live video & past recordings anytime on your phone anywhere" },
    { icon: HardDrive, title: "DVR / NVR Setup & Storage", desc: "Continuous recording setup with Surveillance hard drive storage" },
    { icon: Wrench, title: "CCTV Repair & Maintenance", desc: "Troubleshoot video loss, offline cameras, blurry lens, or power adapter" },
    { icon: Building, title: "Office / Shop / Home Security", desc: "Custom security setups for factories, godowns, jewellery shops in Jalna" },
    { icon: CheckCircle, title: "Annual Maintenance (AMC)", desc: "Scheduled cleaning, camera angle checks & firmware health inspections" },
  ];

  return (
    <section id="cctv" className="py-16 bg-slate-950 text-white border-t border-b border-slate-800 relative overflow-hidden">
      {/* Subtle red/blue security glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/80 text-xs font-bold mb-3">
            <ShieldCheck size={14} className="text-red-400" />
            <span>24/7 SURVEILLANCE & SECURITY SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            CCTV Camera Sales & Installation
          </h2>

          <p className="text-xl font-bold text-amber-400 mt-2">
            "घर, दुकान और ऑफिस को सुरक्षित रखें."
          </p>

          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            "Suraksha har waqt!" HD और 4MP सीसीटीवी कैमरे, मोबाइल लाइव व्यूइंग, DVR/NVR सेटअप और मेंटेनेंस — जालना में फ्री साइट विजिट और बेस्ट प्राइस.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {cctvFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-amber-400/50 transition-all hover:bg-slate-850 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 border border-blue-900/60 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action box with Trust Badges */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 border-2 border-blue-800/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs rounded-full uppercase tracking-wider">
              Free Site Survey in Jalna
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              दुकान या घर पर CCTV लगवाना चाहते हैं?
            </h4>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              हम आपकी आवश्यकता और बजट के अनुसार सही कैमरा सिस्टम सजेस्ट करेंगे. Hikvision, CP Plus, Dahua जैसे ओरिजिनल ब्रांड्स और वारंटी.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={getWhatsAppLink(cctvWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-base shadow-lg shadow-emerald-900/50 transition-all hover:scale-102"
            >
              <MessageSquare size={18} />
              <span>Get CCTV Assistance</span>
            </a>

            <a
              href={getPhoneCallLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-base border border-slate-700 transition-colors"
            >
              <Phone size={17} className="text-amber-400" />
              <span>Call: {PHONE_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
