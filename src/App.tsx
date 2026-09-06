import { motion } from "motion/react";
import { Phone, MessageCircle, Monitor, Camera, Megaphone, Palette, CheckCircle } from "lucide-react";

export default function App() {
  const phoneNumber = "9764369897";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header/Hero */}
      <header className="bg-blue-950 text-white py-16 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          EBC DIGITAL HUB – <span className="text-yellow-500">Your Local Tech Partner in Jalna</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          IT Repair | CCTV Installation | FB Ads | Social Media & Design
        </p>
        <p className="text-lg text-yellow-400 italic mb-10">
          "Computer ki har problem ka solution! Suraksha har waqt!"
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href={whatsappUrl} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2">
            <MessageCircle size={24} /> Call / WhatsApp: {phoneNumber}
          </a>
          <a href={whatsappUrl} className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 px-8 py-3 rounded-full font-bold text-lg">
            Get Free Consultation
          </a>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-950">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: <Monitor className="text-yellow-500" size={48} />, title: "IT & Desktop Hardware Repairing", desc: "Desktop/Laptop Repair, Windows & Software Installation, Virus Removal, Data Recovery, Hardware Upgrade, Network & WiFi Setup, Printer Repair, Custom PC Build, On-site Service." },
            { icon: <Camera className="text-yellow-500" size={48} />, title: "CCTV Camera Sales & Installation", desc: "HD & 4MP Cameras, Indoor/Outdoor, Night Vision, Mobile Live Viewing, DVR/NVR Setup, Office/Shop/Home Security, Annual Maintenance." },
            { icon: <Megaphone className="text-yellow-500" size={48} />, title: "Facebook Ads Service", desc: "Campaign Setup, Audience Targeting, Creative Image/Video Copywriting, Daily Optimization, Lead Generation." },
            { icon: <Palette className="text-yellow-500" size={48} />, title: "Social Media & Design Work", desc: "FB/Insta Post Design, Reels & Video Editing, Logo/Banner Design, Festival Posters, Social Media Management." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-950">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-950">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "One Stop Tech Solution",
            "Experienced Technicians & Genuine Parts",
            "Affordable Pricing & Quick Response",
            "Local Support in Jalna (Home & Office Visit)"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <CheckCircle className="text-green-600" />
              <span className="font-semibold text-blue-950">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10 text-center">
        <p className="text-lg font-bold">Contact: {phoneNumber}</p>
        <p className="text-gray-300">Location: Jalna, Maharashtra</p>
      </footer>

      {/* Floating Button */}
      <a 
        href={whatsappUrl} 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <Phone size={32} />
      </a>
    </div>
  );
}
