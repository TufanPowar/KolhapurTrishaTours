export type SupportedLanguage = 'en' | 'mr';

export interface MetaContent {
  title: string;
  description: string;
  keywords: string;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface Vehicle {
  name: string;
  image: string;
  seating: string;
  ac: string;
  luggage: string;
  features: string[];
}

export interface TourPackage {
  category: string;
  name: string;
  duration: string;
  locations: string;
  inclusions: string[];
  image: string;
  vehicleType: string;
  vehicleImage: string;
}

export interface SiteContent {
  companyName: string;
  tagLine: string;
  meta: {
    home: MetaContent;
    about: MetaContent;
    services: MetaContent;
    fleet: MetaContent;
    packages: MetaContent;
    quotation: MetaContent;
    gallery: MetaContent;
    contact: MetaContent;
  };
  nav: { label: string; path: string }[];
  hero: {
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaCall: string;
    ctaWhatsapp: string;
  };
  whyChooseUs: string[];
  destinations: { name: string; image: string }[];
  cabCategories: string[];
  servicesOverview: string[];
  testimonials: { name: string; comment: string }[];
  faqs: { question: string; answer: string }[];
  trustIndicators: string[];
  emergencyBanner: string;
  about: { intro: string; mission: string; vision: string; experience: string; areas: string; commitment: string };
  services: {
    cabRental: string[];
    tours: string[];
    corporate: string[];
    eventTransportation: string[];
  };
  vehicles: Vehicle[];
  packages: TourPackage[];
  gallery: { category: string; image: string; title: string }[];
  social: { facebook: string; instagram: string; youtube: string; googleBusiness: string };
  contact: ContactInfo;
}
