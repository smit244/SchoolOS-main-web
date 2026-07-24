export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'academic' | 'admin' | 'mobile';
  iconName: string;
  badge?: string;
}

export interface ModuleItem {
  id: string;
  name: string;
  role: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  color: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatar: string;
  quote: string;
  metrics: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'ai' | 'pricing' | 'security';
}
