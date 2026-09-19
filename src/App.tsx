import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSearch } from './components/ServiceSearch';
import { TonerRefillingHighlight } from './components/TonerRefillingHighlight';
import { ITServicesGrid } from './components/ITServicesGrid';
import { CCTVSection } from './components/CCTVSection';
import { OnlineDocumentsSection } from './components/OnlineDocumentsSection';
import { HomeServiceBooking } from './components/HomeServiceBooking';
import { DigitalMarketingSection } from './components/DigitalMarketingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminModal } from './components/AdminModal';
import { INITIAL_SERVICES } from './data/servicesData';
import { ServiceItem } from './types';

const STORAGE_KEY = 'ebc_services_data_v1';

export default function App() {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load services from localStorage:', e);
    }
    return INITIAL_SERVICES;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const handleUpdateServices = (updated: ServiceItem[]) => {
    setServices(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save services to localStorage:', e);
    }
  };

  const handleResetServices = () => {
    if (confirm('क्या आप डिफ़ॉल्ट सर्विसेज पर रीसेट करना चाहते हैं?')) {
      setServices(INITIAL_SERVICES);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error('Failed to reset localStorage:', e);
      }
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForBooking(service.name);
    const element = document.getElementById('home-service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Primary CTAs & Dual Category Gateways */}
        <Hero />

        {/* 3. Instant Service Search Filter */}
        <ServiceSearch 
          services={services} 
          onSelectService={handleSelectService}
        />

        {/* 4. Special Highlight: Toner Refilling (Doorstep Home Service) */}
        <TonerRefillingHighlight />

        {/* 5. Detailed IT & Computer Services Grid */}
        <ITServicesGrid 
          services={services} 
          onSelectService={handleSelectService}
        />

        {/* 6. CCTV Sales, Installation & Surveillance */}
        <CCTVSection />

        {/* 7. Home & Office Doorstep Booking Form */}
        <HomeServiceBooking 
          initialService={selectedServiceForBooking}
        />

        {/* 8. Online Document & Digital Assistance (With Required Disclaimer) */}
        <OnlineDocumentsSection />

        {/* 9. Local Business Marketing: FB Ads & Creative Poster Design */}
        <DigitalMarketingSection />

        {/* 10. Why Choose Us (5 Trust Cards, 4-Step Process & Anti-Fraud Security) */}
        <WhyChooseUs />

        {/* 11. Contact Details, Hours & Jalna Coverage Areas */}
        <ContactSection />

        {/* 12. Final Homepage Call To Action */}
        <FinalCTA />
      </main>

      {/* 13. Comprehensive Footer with Disclaimers & Legal Notice */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* 14. Mobile Sticky Bottom Action Bar ([📞 Call] [💬 WhatsApp]) */}
      <MobileStickyBar />

      {/* 15. Floating Desktop WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* 16. Discrete Owner Service Management Panel */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        services={services}
        onUpdateServices={handleUpdateServices}
        onResetServices={handleResetServices}
      />
    </div>
  );
}
