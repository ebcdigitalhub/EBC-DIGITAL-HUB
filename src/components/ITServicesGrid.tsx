import React, { useState } from 'react';
import { 
  Laptop, 
  Monitor, 
  MessageSquare, 
  CheckCircle2, 
  Home, 
  Wrench, 
  Cpu, 
  Layers, 
  Wifi, 
  ShieldAlert, 
  Database, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { getWhatsAppLink } from '../utils/whatsapp';

interface ITServicesGridProps {
  services: ServiceItem[];
  onSelectService?: (service: ServiceItem) => void;
}

export const ITServicesGrid: React.FC<ITServicesGridProps> = ({ services, onSelectService }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');

  // Filter IT & Computer services
  const itServices = services.filter((s) => s.category === 'it-security' && s.active);

  const subcategories = ['All', 'Hardware & OS', 'Software & OS', 'Hardware Upgrade', 'Printer & Peripherals', 'Networking', 'Data Protection'];

  const filtered = selectedSubcategory === 'All' 
    ? itServices 
    : itServices.filter(s => s.subcategory === selectedSubcategory);

  return (
    <section id="it-services" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-amber-400 border border-blue-800 text-xs font-bold mb-3">
            <Wrench size={14} />
            <span>EXPERT IT REPAIR & HARDWARE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            IT & Computer Services
          </h2>
          <p className="text-slate-300 text-base mt-2">
            "Computer ki har problem ka solution!" लैपटॉप, डेस्कटॉप, प्रिंटर, या नेटवर्क — जालना में ऑन-साइट और होम सर्विस उपलब्ध.
          </p>
        </div>

        {/* Subcategory Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {subcategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubcategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedSubcategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-inner">
                    <DynamicIcon name={service.iconName} size={24} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {service.homeServiceAvailable && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800 rounded-full">
                        <Home size={10} />
                        Home Visit
                      </span>
                    )}
                    {service.popular && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full">
                        Popular in Jalna
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                  {service.name}
                </h3>
                {service.hindiName && (
                  <p className="text-xs text-amber-400/90 font-medium mb-2.5">
                    {service.hindiName}
                  </p>
                )}

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {service.estimatedPriceNote && (
                  <div className="mb-4 inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    💡 <span className="font-semibold text-amber-300">{service.estimatedPriceNote}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href="#home-service"
                  onClick={() => onSelectService && onSelectService(service)}
                  className="text-xs text-slate-300 hover:text-amber-400 font-medium transition-colors"
                >
                  Book Visit →
                </a>

                <a
                  href={getWhatsAppLink(service.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-900/40 transition-all hover:scale-102"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner note below grid */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-2xl border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="text-amber-400" size={18} />
              क्या आपका कंप्यूटर या लैपटॉप बहुत स्लो चल रहा है?
            </h4>
            <p className="text-sm text-slate-300 mt-0.5">
              पुराने कंप्यूटर में SSD + RAM लगवाएं और 10 गुना तेज स्पीड पाएं! जालना में ऑन-साइट अपग्रेड.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello EBC Digital Hub, मेरा कंप्यूटर बहुत स्लो है, मुझे SSD और RAM upgrade के बारे में पूछना है.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all"
          >
            Upgrade Fast PC →
          </a>
        </div>
      </div>
    </section>
  );
};
