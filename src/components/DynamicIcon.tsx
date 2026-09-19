import React from 'react';
import {
  Laptop,
  Monitor,
  Layers,
  AppWindow,
  ShieldAlert,
  Database,
  Cpu,
  Printer,
  Wifi,
  Wrench,
  Droplets,
  RefreshCw,
  Sparkles,
  Camera,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Palette,
  CheckCircle,
  Clock,
  MapPin,
  Home,
  MessageSquare,
  ThumbsUp,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  switch (name) {
    case 'Laptop': return <Laptop className={className} size={size} />;
    case 'Monitor': return <Monitor className={className} size={size} />;
    case 'Layers': return <Layers className={className} size={size} />;
    case 'AppWindow': return <AppWindow className={className} size={size} />;
    case 'ShieldAlert': return <ShieldAlert className={className} size={size} />;
    case 'Database': return <Database className={className} size={size} />;
    case 'Cpu': return <Cpu className={className} size={size} />;
    case 'Printer': return <Printer className={className} size={size} />;
    case 'Wifi': return <Wifi className={className} size={size} />;
    case 'Wrench': return <Wrench className={className} size={size} />;
    case 'Droplets': return <Droplets className={className} size={size} />;
    case 'RefreshCw': return <RefreshCw className={className} size={size} />;
    case 'Sparkles': return <Sparkles className={className} size={size} />;
    case 'Camera': return <Camera className={className} size={size} />;
    case 'Smartphone': return <Smartphone className={className} size={size} />;
    case 'ShieldCheck': return <ShieldCheck className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'Palette': return <Palette className={className} size={size} />;
    case 'CheckCircle': return <CheckCircle className={className} size={size} />;
    case 'Clock': return <Clock className={className} size={size} />;
    case 'MapPin': return <MapPin className={className} size={size} />;
    case 'Home': return <Home className={className} size={size} />;
    case 'MessageSquare': return <MessageSquare className={className} size={size} />;
    case 'ThumbsUp': return <ThumbsUp className={className} size={size} />;
    case 'AlertTriangle': return <AlertTriangle className={className} size={size} />;
    default: return <HelpCircle className={className} size={size} />;
  }
};
