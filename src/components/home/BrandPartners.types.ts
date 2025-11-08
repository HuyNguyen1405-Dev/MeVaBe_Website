// Types cho Brand Partners Component

export interface Brand {
  id: number;
  name: string;
  logo: string;
  alt: string;
  website?: string;
  category?: string;
}

export interface TrustIndicator {
  id: number;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  ariaLabel: string;
}

export interface BrandPartnersProps {
  brands?: Brand[];
  trustIndicators?: TrustIndicator[];
  autoSlide?: boolean;
  slideInterval?: number;
  showTrustIndicators?: boolean;
  className?: string;
}

export interface SliderState {
  currentIndex: number;
  isAutoPlaying: boolean;
  isUserInteracting: boolean;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay: number;
}

// SEO Types
export interface StructuredDataBrand {
  "@type": "Brand";
  name: string;
  description: string;
  logo: string;
  website?: string;
}

export interface StructuredDataOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  hasOfferCatalog: any;
  brand: StructuredDataBrand[];
  offers: any;
}

// Performance Types
export interface ImageLoadingState {
  [key: string]: boolean;
}

export interface IntersectionObserverConfig {
  threshold: number;
  rootMargin?: string;
}

// Accessibility Types
export interface A11yConfig {
  announceSlideChanges: boolean;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
  keyboardNavigation: boolean;
}

// Responsive Types
export interface ResponsiveConfig {
  mobile: {
    columns: number;
    itemsPerSlide: number;
  };
  tablet: {
    columns: number;
    itemsPerSlide: number;
  };
  desktop: {
    columns: number;
    showAll: boolean;
  };
}

// Event Types
export interface SliderEvents {
  onSlideChange?: (index: number) => void;
  onBrandClick?: (brand: Brand) => void;
  onTrustIndicatorClick?: (indicator: TrustIndicator) => void;
}

// Theme Types
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColors: string[];
  borderRadius: string;
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Animation Types
export type AnimationType = "fadeInUp" | "slideIn" | "scaleIn" | "none";

export interface AnimationSettings {
  type: AnimationType;
  duration: number;
  delay: number;
  stagger: boolean;
}

// Performance Types
export interface PerformanceConfig {
  lazyLoading: boolean;
  preloadImages: boolean;
  reducedMotion: boolean;
  optimizeAnimations: boolean;
}

// Export all types for use in other files
