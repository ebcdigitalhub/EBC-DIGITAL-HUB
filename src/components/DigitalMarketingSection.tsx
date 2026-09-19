import React from 'react';
import { 
  TrendingUp, 
  Palette, 
  Target, 
  Video, 
  Share2, 
  MessageSquare, 
  Sparkles,
  Phone,
  BarChart,
  Megaphone
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const DigitalMarketingSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-amber-400 border border-blue-800 text-xs font-bold mb-3">
            <TrendingUp size={14} />
            <span>GROW YOUR JALNA BUSINESS ONLINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Facebook Ads & Social Media Design
          </h2>

          <p className="text-amber-400 font-bold text-lg mt-1">
            "अपने बिज़नेस को डिजिटल बनाएं — ज्यादा ग्राहक, ज्यादा सेल्स!"
          </p>

          <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
            जालना के व्यापारियों, शोरूम, क्लिनिक और कोचिंग क्लासेस के लिए लोकल फेसबुक ऐड्स और आकर्षक सोशल मीडिया पोस्ट डिजाइन.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Box 1: FB Ads */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/30">
                  f
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    Facebook & Instagram Ads
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold">Local Jalna Lead Generation</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                {[
                  "Ad Campaign Setup & Management",
                  "Jalna & Nearby Target Audience Pinpointing",
                  "Creative Image, Banner & Copywriting",
                  "Daily Budget & Click Optimization",
                  "Direct Calls & WhatsApp Leads for Your Business"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-300 font-medium mb-4">
                🎯 Best for: कपड़ा दुकान, इलेक्ट्रॉनिक्स, रियल एस्टेट, क्लासेस, डॉक्टर एवं सर्विस प्रोवाइडर्स.
              </div>
            </div>

            <a
              href={getWhatsAppLink("Hello EBC Digital Hub, मुझे अपने बिजनेस के लिए Facebook Ads सर्विस की जानकारी चाहिए.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-700/40 transition-all"
            >
              <MessageSquare size={16} />
              <span>Inquire for FB Ads on WhatsApp</span>
            </a>
          </div>

          {/* Box 2: Social Media & Graphic Design */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-purple-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    Social Media & Design Work
                  </h3>
                  <p className="text-xs text-pink-400 font-semibold">"आपका ब्रांड, हमारी क्रिएटिविटी!"</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-300 mb-6">
                {[
                  "FB & Instagram Daily Post Design",
                  "Reels & Promotional Short Video Editing",
                  "Festival & Holiday Offer Posters",
                  "Business Logo, Visiting Card & Banner Design",
                  "Professional Social Media Page Management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-300 font-medium mb-4">
                🎨 High Quality Marathi, Hindi & English Creative Designs delivered directly on WhatsApp.
              </div>
            </div>

            <a
              href={getWhatsAppLink("Hello EBC Digital Hub, मुझे Social Media Post / Banner Design के बारे में जानकारी चाहिए.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/40 transition-all"
            >
              <MessageSquare size={16} />
              <span>Inquire for Post Design on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
