import React, { useState } from 'react';
import { 
  FileText, 
  ShieldAlert, 
  MessageSquare, 
  CheckCircle2, 
  Info, 
  Landmark, 
  UserCheck, 
  HelpCircle,
  FileCheck,
  Compass,
  GraduationCap
} from 'lucide-react';
import { DOCUMENT_SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const OnlineDocumentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Services (सभी सेवाएं)' },
    { id: 'identity-online', label: 'Identity & PF (पहचान व पीएफ)' },
    { id: 'certificates', label: 'Certificates (दाखले व प्रमाणपत्र)' },
    { id: 'land-records', label: 'Land Records (7/12 व जमीन)' },
    { id: 'forms-schemes', label: 'Scholarships & Schemes (फॉर्म व योजना)' },
  ];

  const filteredGroups = activeTab === 'all' 
    ? DOCUMENT_SERVICES_DATA 
    : DOCUMENT_SERVICES_DATA.filter(g => g.id === activeTab);

  return (
    <section id="online-documents" className="py-16 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800 text-xs font-bold mb-3">
            <FileText size={14} />
            <span>ONLINE DOCUMENT & FORM ASSISTANCE — JALNA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            "ऑनलाइन काम समझ नहीं आ रहा?"
          </h2>

          <p className="text-base sm:text-lg text-amber-400 font-semibold mt-2">
            "बस अपना काम WhatsApp पर बताएं — हम आपको आगे की प्रक्रिया और आवश्यक जानकारी समझाने में सहायता करेंगे."
          </p>

          <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
            PAN कार्ड, PF क्लेम, उत्पन्नाचा दाखला, रहिवासी दाखला, 7/12 उतारा किंवा शिष्यवृत्ती फॉर्म — स्टेप बाय स्टेप सोपी मदत.
          </p>
        </div>

        {/* MANDATORY GOVERNMENT SERVICE DISCLAIMER BANNER */}
        <div className="mb-10 bg-amber-500/10 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 text-amber-200/95 shadow-lg">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-amber-300 uppercase tracking-wide">
                Important Disclaimer / महत्त्वाची सूचना (Private Assistance)
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong>Disclaimer:</strong> EBC Digital Hub is a <strong>private online assistance and service provider</strong>. We are not a Government of Maharashtra department, MahaOnline, Aaple Sarkar or any other government authority. Government applications, certificates, approvals and services are subject to the rules and requirements of the respective department. We do not guarantee approval or issuance of any government document.
              </p>
              <p className="text-[11px] text-amber-300/80 pt-1">
                (हम केवल ऑनलाइन फॉर्म भरने, डॉक्यूमेंट स्कैनिंग व पोर्टल मार्गदर्शन में प्राइवेट तौर पर सहायता करते हैं.)
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Group Cards */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.id} className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="w-3 h-8 bg-amber-400 rounded-full" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {group.title}
                    <span className="text-sm font-medium text-amber-400">({group.hindiTitle})</span>
                  </h3>
                  <p className="text-xs text-slate-400">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-indigo-400/60 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-900/80 text-indigo-300 border border-indigo-700/50 rounded-full shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      {item.documentsNeededTip && (
                        <div className="mb-4 p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 text-[11px] text-slate-400">
                          <span className="text-amber-400 font-semibold block mb-0.5">आवश्यक कागदपत्रे / Proof:</span>
                          <span>{item.documentsNeededTip}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">Personal Assistance</span>
                      <a
                        href={getWhatsAppLink(item.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-sm transition-all"
                      >
                        <MessageSquare size={14} />
                        <span>WhatsApp पर पूछें</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl border border-indigo-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white">
              क्या आपका कोई अन्य सरकारी या कॉलेज फॉर्म बाकी है?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              अगर आपका फॉर्म लिस्ट में नहीं दिख रहा, तो हमें सीधे WhatsApp पर मैसेज भेजकर पूछें.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello EBC Digital Hub, मुझे एक ऑनलाइन फॉर्म भरने में सहायता चाहिए.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-900/40 transition-transform hover:scale-102"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
