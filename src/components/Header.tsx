import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Shield, Monitor } from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services (IT & Security)', href: '#it-services' },
    { name: 'Toner Refill', href: '#toner-highlight', badge: 'Home Service' },
    { name: 'CCTV', href: '#cctv' },
    { name: 'Online Documents', href: '#online-documents' },
    { name: 'Book Home Service', href: '#home-service' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md">
      {/* Top micro-bar for Jalna local trust */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 py-1 px-4 border-b border-blue-900/40 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">📍 Jalna, Maharashtra – Home & Office Visit Available</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-amber-400 font-semibold hidden sm:inline">हर समस्या का समाधान एक ही जगह!</span>
            <a 
              href={getPhoneCallLink()} 
              className="hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <Phone size={12} className="text-amber-400" />
              <span>Call: {PHONE_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Monitor size={22} className="text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  EBC DIGITAL HUB
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold bg-blue-900/80 text-blue-200 border border-blue-700/50 rounded-full uppercase tracking-wider">
                  Jalna
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none mt-0.5">
                Your Local Digital & Tech Partner
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-lg transition-colors relative"
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={getPhoneCallLink()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              title="Direct Phone Call"
            >
              <Phone size={15} className="text-amber-400" />
              <span>Call Now</span>
            </a>

            <a
              href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-700/30 transition-all hover:shadow-emerald-600/50"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageSquare size={18} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          <div className="p-2 bg-blue-950/60 rounded-lg border border-blue-900/50 mb-3 text-xs text-slate-300 flex items-center justify-between">
            <span>📍 Local Service in Jalna, MH</span>
            <span className="text-amber-400 font-bold">{PHONE_NUMBER_DISPLAY}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-[11px] font-bold bg-amber-400 text-slate-950 rounded-full">
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-2 border-t border-slate-800">
            <a
              href={getPhoneCallLink()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-800 text-white text-sm font-semibold rounded-lg"
            >
              <Phone size={16} className="text-amber-400" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-md"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
