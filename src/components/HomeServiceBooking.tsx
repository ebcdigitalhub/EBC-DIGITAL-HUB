import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Store, 
  MessageSquare, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { JALNA_AREAS } from '../data/servicesData';
import { formatBookingMessage, getWhatsAppLink, PHONE_NUMBER_DISPLAY } from '../utils/whatsapp';

interface HomeServiceBookingProps {
  initialService?: string;
}

export const HomeServiceBooking: React.FC<HomeServiceBookingProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [area, setArea] = useState(JALNA_AREAS[0]);
  const [serviceCategory, setServiceCategory] = useState('Computer / Laptop Repair');
  const [serviceRequired, setServiceRequired] = useState(initialService || '');
  const [isHomeService, setIsHomeService] = useState<'yes' | 'no'>('yes');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const availableServices = [
    { title: "Computer & Desktop Repair", icon: "🖥️", desc: "Motherboard, display, OS & speed" },
    { title: "Laptop Repair", icon: "💻", desc: "Screen, keyboard, heating, battery" },
    { title: "Toner Refilling", icon: "💧", desc: "Doorstep laser printer cartridge refill" },
    { title: "Printer Repair & Service", icon: "🖨️", desc: "Paper jam, roller, scanner setup" },
    { title: "CCTV Camera Service", icon: "📹", desc: "New camera install & repair" },
    { title: "Network & Wi-Fi Setup", icon: "📶", desc: "Office LAN & router configuration" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = formatBookingMessage({
      name,
      mobile,
      area,
      serviceCategory,
      serviceRequired: serviceRequired || serviceCategory,
      isHomeService,
      preferredDate,
      preferredTime,
      message,
    });

    const waLink = getWhatsAppLink(formattedMessage);
    setFormSubmitted(true);

    // Open WhatsApp in new window/tab
    window.open(waLink, '_blank');
  };

  return (
    <section id="home-service" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-bold mb-3">
            <Home size={14} />
            <span>DOORSTEP JALNA ASSISTANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            "Service आपके घर या ऑफिस तक"
          </h2>

          <p className="text-slate-300 text-base mt-2">
            दुकान तक भारी कम्प्यूटर या प्रिंटर ले जाने की चिंता छोड़ें! अब EBC Digital Hub की एक्सपर्ट सर्विस सीधे आपके पते पर.
          </p>

          {/* Three Coverage Types */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200">
              <span className="p-1.5 bg-blue-900/50 rounded-lg text-blue-400"><Home size={16} /></span>
              <span>🏠 Home Service</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200">
              <span className="p-1.5 bg-amber-900/50 rounded-lg text-amber-400"><Building2 size={16} /></span>
              <span>🏢 Office Service</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200">
              <span className="p-1.5 bg-emerald-900/50 rounded-lg text-emerald-400"><Store size={16} /></span>
              <span>🏪 Shop Service</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What We Visit For */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-400" size={20} />
                इन सेवाओं के लिए Home Visit उपलब्ध:
              </h3>

              <div className="space-y-3">
                {availableServices.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800/80">
                    <span className="text-2xl">{srv.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{srv.title}</h4>
                      <p className="text-xs text-slate-400">{srv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security guarantee box */}
              <div className="mt-6 p-4 bg-blue-950/60 rounded-2xl border border-blue-900/60 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <ShieldAlert size={16} />
                  <span>Security & Safety Notice</span>
                </div>
                <p>
                  ✓ <strong>We will never ask you to share your OTP, password or banking PIN.</strong>
                </p>
                <p className="text-slate-400">
                  कृपया sensitive documents WhatsApp पर भेजने से पहले हमारी instructions प्राप्त करें.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Booking Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border-2 border-slate-800 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                Book Home Service / Request
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                फॉर्म भरें — सीधे WhatsApp पर मैसेज तैयार हो जाएगा. किसी लॉगिन या पासवर्ड की जरूरत नहीं!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    आपका नाम (Your Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="जैसे: Ramesh Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    मोबाइल नंबर (WhatsApp Number) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="जैसे: 98XXXXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Jalna Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    जालना एरिया / लोकेशन (Area in Jalna) *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  >
                    {JALNA_AREAS.map((loc) => (
                      <option key={loc} value={loc} className="bg-slate-950 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    सर्विस कैटेगरी (Service Category)
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  >
                    <option value="Computer / Laptop Repair">Computer / Laptop Repair</option>
                    <option value="Toner Refilling Home Service">Toner Refilling (Home Service)</option>
                    <option value="Printer Repair & Setup">Printer Repair & Setup</option>
                    <option value="CCTV Installation & Service">CCTV Installation & Service</option>
                    <option value="Wi-Fi / Network Setup">Wi-Fi / LAN Network Setup</option>
                    <option value="Online Document / Form Assistance">Online Document / Form Assistance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Home Service Yes/No */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Home / Doorstep Service चाहिए?
                  </label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-2 text-sm text-slate-200 cursor-pointer">
                      <input
                        type="radio"
                        name="homeService"
                        checked={isHomeService === 'yes'}
                        onChange={() => setIsHomeService('yes')}
                        className="text-amber-400 focus:ring-0"
                      />
                      <span>हाँ, घर/ऑफिस पर आएं</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-200 cursor-pointer">
                      <input
                        type="radio"
                        name="homeService"
                        checked={isHomeService === 'no'}
                        onChange={() => setIsHomeService('no')}
                        className="text-amber-400 focus:ring-0"
                      />
                      <span>नहीं, मैं सेंटर आऊंगा</span>
                    </label>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    पसंदीदा तारीख (Preferred Date)
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    पसंदीदा समय (Preferred Time)
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  >
                    <option value="Morning (10 AM - 1 PM)">सुबह (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">दोपहर (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">शाम (4 PM - 8 PM)</option>
                    <option value="Urgent / As soon as possible">तत्काल / Urgent</option>
                  </select>
                </div>

                {/* Specific problem or message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    समस्या का विवरण (Problem / Note)
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="जैसे: लैपटॉप स्क्रीन चालू नहीं हो रही, या टोनर खत्म है"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-base shadow-xl shadow-emerald-900/50 flex items-center justify-center gap-2.5 transition-all active:scale-98"
                >
                  <MessageSquare size={20} />
                  <span>Send Request on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                बटन दबाते ही सीधे WhatsApp पर मैसेज बन जाएगा, जहां आप आसानी से भेज सकेंगे.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
