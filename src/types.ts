export type ServiceCategory = 
  | 'it-security'
  | 'cctv'
  | 'toner'
  | 'online-documents'
  | 'digital-marketing';

export interface ServiceItem {
  id: string;
  name: string;
  hindiName?: string;
  category: ServiceCategory;
  subcategory?: string;
  description: string;
  iconName: string;
  popular?: boolean;
  homeServiceAvailable: boolean;
  tags: string[];
  defaultWhatsAppMessage: string;
  estimatedPriceNote?: string;
  active: boolean;
}

export interface HomeServiceBooking {
  name: string;
  mobile: string;
  area: string;
  serviceCategory: string;
  serviceRequired: string;
  isHomeService: 'yes' | 'no';
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

export interface DocumentCategoryGroup {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    documentsNeededTip?: string;
    badge?: string;
    waMessage: string;
  }>;
}
