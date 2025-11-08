// Types for Category List Component - Mom & Baby Shop
export interface Category {
  id: number;
  name: string;
  image: string;
  icon: string;
  href: string;
  productCount: number;
  description: string;
  alt: string;
  gradient: string;
  iconBg: string;
  featured: boolean;
}

export interface CategoryListProps {
  categories?: Category[];
  showStats?: boolean;
  maxCategories?: number;
  className?: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
}

export interface TrustIndicator {
  id: string;
  icon: React.ReactNode;
  text: string;
  bgGradient: string;
}

// SEO and accessibility constants
export const SEO_KEYWORDS = {
  MAIN: "shop mẹ và bé",
  CATEGORY: "danh mục sản phẩm cho bé",
  CARE: "sản phẩm chăm sóc mẹ và bé",
  QUALITY: "sản phẩm mẹ bé chất lượng",
  TRUSTED: "cửa hàng mẹ bé uy tín",
} as const;

export const BRAND_COLORS = {
  PRIMARY: "#0ba6df",
  SECONDARY: "#3b82f6",
  ACCENT: "#6366f1",
  SUCCESS: "#10b981",
  WARNING: "#f59e0b",
  DANGER: "#ef4444",
} as const;

export const RESPONSIVE_BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;
