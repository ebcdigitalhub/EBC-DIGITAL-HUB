import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Monitor, 
  Lock, 
  CheckCircle,
  FileText,
  Heart
} from 'lucide-react';
import { PHONE_NUMBER_DISPLAY, getWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-24 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                <Monitor size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                EBC DIGITAL HUB
              </span>
            </div>

            <p className="text-amber-400 font-semibold text-sm">
              "Your Local Digital & Tech Service Partner – Jalna"
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              "Computer ki har problem ka solution! Suraksha har waqt!" <br />
              IT hardware repair, toner refilling, CCTV security installation, and private online document form assistance.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle size={14} /> Verified Jalna Service
              </span>
              <span>•</span>
              <span>Home & Office Visit</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#it-services" className="hover:text-amber-400 transition-colors">IT & Computer Services</a></li>
              <li><a href="#toner-highlight" className="hover:text-amber-400 transition-colors">Toner Refilling (Home Service)</a></li>
              <li><a href="#cctv" className="hover:text-amber-400 transition-colors">CCTV Sales & Installation</a></li>
              <li><a href="#online-documents" className="hover:text-amber-400 transition-colors">Online Documents & Forms</a></li>
              <li><a href="#home-service" className="hover:text-amber-400 transition-colors">Book Home Service</a></li>
              <li><a href="#why-choose-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Contact & Support
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <a href={getPhoneCallLink()} className="hover:text-amber-300 font-bold">
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-emerald-400" />
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300"
                >
                  WhatsApp: {PHONE_NUMBER_DISPLAY}
                </a>
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-400">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Jalna, Maharashtra — 431203</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppLink("Hello EBC Digital Hub, मुझे आपकी services के बारे में जानकारी चाहिए.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* MANDATORY FOOTER DISCLAIMER */}
        <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-1.5 mb-8">
          <p className="text-slate-300 font-semibold flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-amber-400" />
            Important Notice / डिस्क्लेमर:
          </p>
          <p className="leading-relaxed">
            "Private service provider. Government-related services are provided as online assistance only and are subject to the respective department's rules and requirements."
          </p>
          <p className="text-[11px] text-slate-500">
            EBC Digital Hub is an independent local service and tech solutions business in Jalna, Maharashtra. We do not represent any government department or portal directly.
          </p>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EBC DIGITAL HUB. All rights reserved. Jalna, Maharashtra.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => setShowLegalModal('privacy')}
              className="hover:text-slate-300 hover:underline"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowLegalModal('terms')}
              className="hover:text-slate-300 hover:underline"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => setShowLegalModal('disclaimer')}
              className="hover:text-slate-300 hover:underline"
            >
              Disclaimer
            </button>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 text-[10px]"
              title="Manage Services"
            >
              <Lock size={10} />
              <span>Owner Panel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Privacy, Terms, Disclaimer */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 text-slate-200 text-sm space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-white capitalize">
                {showLegalModal === 'privacy' && 'Privacy Policy'}
                {showLegalModal === 'terms' && 'Terms & Conditions'}
                {showLegalModal === 'disclaimer' && 'Legal Disclaimer'}
              </h3>
              <button 
                onClick={() => setShowLegalModal(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto pr-2 space-y-3 text-xs text-slate-300 leading-relaxed">
              {showLegalModal === 'privacy' && (
                <>
                  <p><strong>Privacy Commitment:</strong> EBC Digital Hub respects your privacy. We will never sell or rent your contact number or personal details.</p>
                  <p><strong>Sensitive Documents:</strong> We do not store sensitive identity documents like Aadhaar, PAN, or voter IDs on public servers. We will never ask for your confidential banking OTP, UPI PIN, or passwords.</p>
                  <p>All communication takes place directly via WhatsApp or phone call for maximum client transparency.</p>
                </>
              )}
              {showLegalModal === 'terms' && (
                <>
                  <p><strong>Service Scope:</strong> EBC Digital Hub provides on-site computer and printer repair, CCTV surveillance installation, toner refilling, and private digital form guidance in Jalna, Maharashtra.</p>
                  <p><strong>Estimates & Warranty:</strong> Hardware replacements and components carry standard manufacturer warranties as applicable. Repair charges are communicated before undertaking major work.</p>
                  <p><strong>Doorstep Service:</strong> Home/Office visit timings are confirmed based on technician availability in Jalna.</p>
                </>
              )}
              {showLegalModal === 'disclaimer' && (
                <>
                  <p><strong>Private Service Entity:</strong> EBC Digital Hub is a privately-owned technology & digital facilitation agency based in Jalna, Maharashtra.</p>
                  <p>We are not a government office, MahaOnline center, Aaple Sarkar portal, or statutory body. All government document and certificate assistance is provided strictly on a professional consultation and application support basis. The issuance and approval of certificates rest solely with the respective government authorities.</p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowLegalModal(null)}
                className="px-4 py-1.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
