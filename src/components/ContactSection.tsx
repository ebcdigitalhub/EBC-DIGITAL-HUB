import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Mail, 
  Home, 
  CheckCircle,
  Building,
  Navigation
} from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_RAW, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { JALNA_AREAS } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold mb-3">
            <MapPin size={14} />
            <span>LOCAL BUSINESS LOCATION & SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            EBC DIGITAL HUB — Contact Us
          </h2>

          <p className="text-slate-300 text-base mt-2">
            IT & CCTV Solutions • Toner Refilling • Online Document & Digital Assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Business Contact Card */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-10 rounded-3xl border-2 border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                  Your Local Tech & Digital Partner
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  EBC DIGITAL HUB
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Computer ki har problem ka solution! Suraksha har waqt!
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0 border border-blue-900">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Location / पता</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Jalna, Maharashtra — 431203
                    </p>
                    <p className="text-[11px] text-amber-400 mt-0.5">
                      (Home & Office Visit Available across Jalna city & nearby areas)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 text-amber-400 flex items-center justify-center shrink-0 border border-amber-900/60">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Contact Number</h4>
                    <a
                      href={getPhoneCallLink()}
                      className="text-base font-bold text-amber-300 hover:underline block mt-0.5"
                    >
                      {PHONE_NUMBER_DISPLAY}
                    </a>
                    <span className="text-[11px] text-slate-400">Direct Call Available</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">WhatsApp Assistance</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {PHONE_NUMBER_DISPLAY} (Fastest response)
                    </p>
                    <span className="text-[11px] text-emerald-400">24x7 Message drop available</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center shrink-0 border border-slate-800">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Working Hours</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      सोमवार से शनिवार: 9:30 AM – 8:30 PM
                    </p>
                    <p className="text-[11px] text-slate-400">
                      रविवार: इमरजेंसी होम सर्विस उपलब्ध (कॉल/व्हाट्सएप पर पहले कन्फर्म करें)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <a
                href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपसे संपर्क करना है.")}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={getPhoneCallLink()}
                className="py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Local Jalna Service Coverage */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Navigation className="text-amber-400" size={20} />
                  Jalna Service Areas Covered
                </h4>
                <span className="text-xs bg-emerald-900/80 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                  On-Site Reach
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mb-5">
                हमारे तकनीशियन जालना शहर और आसपास के क्षेत्रों में कंप्यूटर, टोनर रिफिलिंग एवं CCTV के लिए डोरस्टेप सर्विस देते हैं:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {JALNA_AREAS.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle size={14} className="text-amber-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl border border-blue-900/50 text-xs text-slate-300">
                <p className="font-semibold text-amber-300 mb-1">
                  💡 दूरस्थ परिसर या ग्रामीण क्षेत्र (Nearby Villages)?
                </p>
                <p>
                  अगर आप जालना तालुका के नजदीकी ग्रामीण या एमआईडीसी क्षेत्र में हैं, तो पहले WhatsApp पर लोकेशन शेयर करें. हम विजिट का समय और सुविधा कन्फर्म करेंगे.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>📍 Jalna, Maharashtra</span>
              <a
                href={getWhatsAppLink("Hello EBC Digital Hub, मैं जालना से हूँ और मुझे होम सर्विस चाहिए.")}
                className="text-amber-400 hover:underline font-semibold"
              >
                Send Location on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
