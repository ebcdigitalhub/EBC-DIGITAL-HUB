import React, { useState, useMemo } from 'react';
import { Search, MessageSquare, ArrowRight, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { getWhatsAppLink } from '../utils/whatsapp';

interface ServiceSearchProps {
  services: ServiceItem[];
  onSelectService?: (service: ServiceItem) => void;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({ services, onSelectService }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickTags = [
    { label: 'Toner Refill', query: 'Toner' },
    { label: 'PF / EPFO', query: 'PF' },
    { label: 'Laptop Repair', query: 'Laptop' },
    { label: 'CCTV Camera', query: 'CCTV' },
    { label: 'PAN Card', query: 'PAN' },
    { label: 'Income Certificate', query: 'Income' },
    { label: '7/12 उतारा', query: '7/12' },
    { label: 'Windows Setup', query: 'Windows' },
    { label: 'SSD Upgrade', query: 'SSD' },
    { label: 'Printer Fix', query: 'Printer' },
  ];

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    
    return services.filter((s) => {
      const matchName = s.name.toLowerCase().includes(q);
      const matchHindi = s.hindiName?.toLowerCase().includes(q) || false;
      const matchDesc = s.description.toLowerCase().includes(q);
      const matchCategory = s.category.toLowerCase().includes(q);
      const matchTags = s.tags.some(tag => tag.toLowerCase().includes(q));
      return matchName || matchHindi || matchDesc || matchCategory || matchTags;
    });
  }, [searchQuery, services]);

  return (
    <section className="py-8 bg-slate-900 border-b border-slate-800 text-white relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold mb-2">
            <Sparkles size={14} />
            <span>Instant Local Service Finder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            आपको कौन-सा काम करवाना है?
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            कंप्यूटर, टोनर, सीसीटीवी या कोई भी ऑनलाइन फॉर्म — सर्च करें और तुरंत WhatsApp पर बात करें.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-amber-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="जैसे: PF, PAN Card, Toner, CCTV, Laptop, Income Certificate..."
            className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-slate-950 text-white text-base rounded-2xl border-2 border-slate-700 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 shadow-lg outline-none transition-all placeholder:text-slate-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 text-xs">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Tag size={12} /> Popular:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => setSearchQuery(tag.query)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                searchQuery.toLowerCase() === tag.query.toLowerCase()
                  ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Filtered Search Results Dropdown/Box */}
        {searchQuery.trim().length > 0 && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 border-b border-slate-800 pb-2">
              <span>Results for "{searchQuery}"</span>
              <span>{filteredServices.length} services found</span>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-3.5 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-blue-950 text-amber-400 border border-blue-900">
                            <DynamicIcon name={service.iconName} size={18} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                              {service.name}
                            </h4>
                            {service.hindiName && (
                              <p className="text-[11px] text-amber-400/90">{service.hindiName}</p>
                            )}
                          </div>
                        </div>
                        {service.homeServiceAvailable && (
                          <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full">
                            Home Visit
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <a
                        href="#home-service"
                        onClick={() => onSelectService && onSelectService(service)}
                        className="text-xs text-amber-400 hover:underline font-medium"
                      >
                        Book Service
                      </a>
                      <a
                        href={getWhatsAppLink(service.defaultWhatsAppMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm"
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp Now</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* If no result matches */
              <div className="p-6 text-center bg-slate-900/90 rounded-xl border border-slate-800">
                <p className="text-base text-slate-200 font-semibold mb-1">
                  "{searchQuery}" लिस्ट में सीधे नहीं मिला?
                </p>
                <p className="text-sm text-slate-400 mb-4">
                  यह service हमें WhatsApp पर बताएं — हम आपकी तुरंत सहायता करेंगे.
                </p>
                <a
                  href={getWhatsAppLink(`Hello EBC Digital Hub, मुझे "${searchQuery}" से संबंधित सेवा चाहिए. क्या यह Jalna में उपलब्ध है?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-700/30"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Now: 97643 69897</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
