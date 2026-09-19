import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, Check, Lock, Save, AlertCircle, RefreshCw } from 'lucide-react';
import { ServiceItem, ServiceCategory } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  onUpdateServices: (updated: ServiceItem[]) => void;
  onResetServices: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  services,
  onUpdateServices,
  onResetServices
}) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newServiceName, setNewServiceName] = useState('');
  const [newHindiName, setNewHindiName] = useState('');
  const [newCategory, setNewCategory] = useState<ServiceCategory>('it-security');
  const [newDesc, setNewDesc] = useState('');
  const [newHomeService, setNewHomeService] = useState(true);
  const [newWaMsg, setNewWaMsg] = useState('');
  const [newPrice, setNewPrice] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default owner access code: 9764 (first 4 digits of their phone) or 1234
    if (pin === '9764' || pin === '1234' || pin === 'ebc2026') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('गलत पिन! (Default owner passcode is: 9764)');
    }
  };

  const handleToggleActive = (id: string) => {
    const updated = services.map(s => s.id === id ? { ...s, active: !s.active } : s);
    onUpdateServices(updated);
  };

  const handleToggleHomeService = (id: string) => {
    const updated = services.map(s => s.id === id ? { ...s, homeServiceAvailable: !s.homeServiceAvailable } : s);
    onUpdateServices(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm('क्या आप सचमुच इस सर्विस को हटाना चाहते हैं?')) {
      const updated = services.filter(s => s.id !== id);
      onUpdateServices(updated);
    }
  };

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceName.trim()) return;

    const newService: ServiceItem = {
      id: `custom-${Date.now()}`,
      name: newServiceName.trim(),
      hindiName: newHindiName.trim() || undefined,
      category: newCategory,
      description: newDesc.trim() || 'Professional service by EBC Digital Hub Jalna.',
      iconName: 'CheckCircle',
      homeServiceAvailable: newHomeService,
      tags: [newServiceName.toLowerCase(), newCategory],
      defaultWhatsAppMessage: newWaMsg.trim() || `Hello EBC Digital Hub, मुझे ${newServiceName} सर्विस चाहिए.`,
      estimatedPriceNote: newPrice.trim() || undefined,
      active: true
    };

    onUpdateServices([newService, ...services]);
    setNewServiceName('');
    setNewHindiName('');
    setNewDesc('');
    setNewWaMsg('');
    setNewPrice('');
    alert('नई सर्विस सफलतापूर्वक जोड़ दी गई!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-xl font-bold">
              <Lock size={18} />
            </div>
            <div>
              <h3 className="text-xl font-bold">EBC Owner Service Manager</h3>
              <p className="text-xs text-slate-400">Manage, enable/disable services, pricing notes & WhatsApp text</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
          >
            <X size={20} />
          </button>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="py-8 max-w-sm mx-auto text-center space-y-4">
            <p className="text-sm text-slate-300">
              कृपया ओनर एक्सेस पिन दर्ज करें:
            </p>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN (e.g. 9764)"
              className="w-full text-center tracking-widest text-2xl px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-amber-400"
            />
            {pinError && <p className="text-xs text-red-400">{pinError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-amber-400 text-slate-950 font-bold rounded-xl hover:bg-amber-300"
            >
              Access Manager
            </button>
            <p className="text-[11px] text-slate-500">
              *Private owner access only.
            </p>
          </form>
        ) : (
          <div className="py-4 space-y-6">
            {/* Quick Add Form */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-sm text-amber-400 flex items-center gap-1.5">
                <Plus size={16} /> Add New Service / नई सर्विस जोड़ें
              </h4>
              <form onSubmit={handleAddNew} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Service Name (e.g. Printer Roller Change)"
                    value={newServiceName}
                    onChange={(e) => setNewServiceName(e.target.value)}
                    className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                  />
                  <input
                    type="text"
                    placeholder="Hindi Name (e.g. प्रिंटर रोलर रिपेयरिंग)"
                    value={newHindiName}
                    onChange={(e) => setNewHindiName(e.target.value)}
                    className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as ServiceCategory)}
                    className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                  >
                    <option value="it-security">IT & Security</option>
                    <option value="toner">Toner Refilling</option>
                    <option value="cctv">CCTV Camera</option>
                    <option value="online-documents">Online Documents</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Price/Note (e.g. ₹299 or Contact for Estimate)"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                  />

                  <label className="flex items-center gap-2 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newHomeService}
                      onChange={(e) => setNewHomeService(e.target.checked)}
                    />
                    <span>Home Service Available</span>
                  </label>
                </div>

                <textarea
                  rows={2}
                  placeholder="Short description of service..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                />

                <input
                  type="text"
                  placeholder="Default WhatsApp message (e.g. Hello EBC, मुझे इस सर्विस की जरूरत है.)"
                  value={newWaMsg}
                  onChange={(e) => setNewWaMsg(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                />

                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center gap-1.5"
                >
                  <Plus size={14} /> Add Service
                </button>
              </form>
            </div>

            {/* List of active services with toggles */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Existing Services ({services.length})</span>
                <button
                  onClick={onResetServices}
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Reset to Defaults
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {services.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                      item.active ? 'bg-slate-900 border-slate-800' : 'bg-slate-950/40 border-slate-850 opacity-60'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-amber-400">
                          {item.category}
                        </span>
                        {item.homeServiceAvailable && (
                          <span className="text-[10px] text-emerald-400">✓ Home Visit</span>
                        )}
                      </div>
                      <p className="text-slate-400 text-[11px] truncate max-w-md">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleToggleHomeService(item.id)}
                        className={`px-2 py-1 rounded text-[10px] font-medium border ${
                          item.homeServiceAvailable 
                            ? 'bg-emerald-950 border-emerald-800 text-emerald-300' 
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}
                        title="Toggle Home Visit"
                      >
                        {item.homeServiceAvailable ? 'Home: Yes' : 'Home: No'}
                      </button>

                      <button
                        onClick={() => handleToggleActive(item.id)}
                        className={`px-2 py-1 rounded text-[10px] font-bold ${
                          item.active 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {item.active ? 'Active' : 'Disabled'}
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-slate-800 rounded"
                        title="Delete service"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
