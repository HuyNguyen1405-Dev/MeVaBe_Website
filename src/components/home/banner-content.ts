// Banner Content Management - Shop Mẹ và Bé
// Optimized content for mother & baby care website

export interface BannerSlide {
  id: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  altText: string;
  promotion?: string;
  category?: "newborn" | "toddler" | "maternity" | "general";
  priority?: "high" | "medium" | "low";
}

// Main banner content with SEO-optimized messages
export const bannerSlides: BannerSlide[] = [
  {
    id: "care-trust",
    headline: "Chăm sóc con yêu – Yên tâm mỗi ngày",
    subheadline: "Sản phẩm an toàn, chất lượng cho bé yêu",
    ctaText: "Khám phá ngay",
    ctaLink: "/client/san-pham",
    image: "/images/banners/happy-mother-baby.webp",
    altText: "Shop mẹ và bé - Sản phẩm an toàn cho bé - Chăm sóc con yêu",
    promotion: "MIỄN PHÍ GIAO HÀNG cho đơn từ 300K",
    category: "general",
    priority: "high",
  },
  {
    id: "happiness-joy",
    headline: "Hạnh phúc của mẹ – Niềm vui của bé",
    subheadline: "Tin cậy từ hàng triệu bà mẹ Việt Nam",
    ctaText: "Mua ngay",
    ctaLink: "/client/san-pham",
    image: "/images/banners/family-lifestyle.webp",
    altText:
      "Sản phẩm chăm sóc mẹ và bé chất lượng cao - Tin cậy từ triệu bà mẹ",
    promotion: "GIẢM 15% cho khách hàng mới",
    category: "maternity",
    priority: "high",
  },
  {
    id: "safety-quality",
    headline: "An toàn tuyệt đối – Chất lượng hoàn hảo",
    subheadline: "Được kiểm định bởi chuyên gia dinh dưỡng",
    ctaText: "Xem thêm",
    ctaLink: "/client/san-pham",
    image: "/images/banners/baby-products-quality.webp",
    altText: "Sản phẩm an toàn chất lượng cho mẹ và bé - Kiểm định chuyên gia",
    promotion: "CAM KẾT 100% chính hãng",
    category: "newborn",
    priority: "medium",
  },
];

// Seasonal banner variants
export const seasonalBanners: Record<string, Partial<BannerSlide>> = {
  spring: {
    headline: "Mùa xuân an lành – Bé khỏe mạnh",
    subheadline: "Sản phẩm organic cho bé trong mùa thay đổi thời tiết",
    promotion: "KHUYẾN MÃI MÙA XUÂN - GIẢM 20%",
  },
  summer: {
    headline: "Mùa hè mát mẻ – Bé thoải mái",
    subheadline: "Sản phẩm chống nắng và bảo vệ da cho bé",
    promotion: "GIẢI NHIỆT MÙA HÈ - ƯU ĐÃI ĐẶC BIỆT",
  },
  autumn: {
    headline: "Thu về ấm áp – Yêu thương trọn vẹn",
    subheadline: "Chuẩn bị cho bé mùa đông ấm áp sắp tới",
    promotion: "COLLECTION THU ĐÔNG - SALE UP TO 30%",
  },
  winter: {
    headline: "Đông ấm áp – Tình yêu bao la",
    subheadline: "Sản phẩm giữ ấm và chăm sóc đặc biệt cho bé",
    promotion: "ĐÓN ĐÔNG ẤM ÁP - FREESHIP TOÀN QUỐC",
  },
};

// Holiday banner variants
export const holidayBanners: Record<string, Partial<BannerSlide>> = {
  tet: {
    headline: "Tết sum vầy – Bé vui khỏe",
    subheadline: "Mừng xuân mới với những món quà ý nghĩa cho bé yêu",
    promotion: "QUÀ TẾT ĐẶC BIỆT - TẶNG KÈM PHỤ KIỆN",
  },
  childrensDay: {
    headline: "Quốc tế thiếu nhi – Niềm vui bé thơ",
    subheadline: "Những món quà tuyệt vời cho ngày hội của các bé",
    promotion: "NGÀY CỦA BÉ - GIẢM SỐC 50%",
  },
  mothersDay: {
    headline: "Ngày của Mẹ – Tình yêu vô bờ",
    subheadline: "Chăm sóc mẹ chu đáo, bé phát triển khỏe mạnh",
    promotion: "TRI ÂN MẸ YÊU - ƯU ĐÃI KHỦNG",
  },
};

// CTA variations for A/B testing
export const ctaVariations = [
  "Khám phá ngay",
  "Mua ngay",
  "Xem thêm",
  "Chọn mua",
  "Đặt hàng ngay",
  "Tìm hiểu thêm",
];

// Trust indicators
export const trustIndicators = [
  {
    icon: "shield-check",
    text: "100% chính hãng",
  },
  {
    icon: "truck",
    text: "Giao hàng 2h nội thành",
  },
  {
    icon: "refresh",
    text: "Đổi trả 30 ngày",
  },
  {
    icon: "heart",
    text: "Tin cậy từ triệu mẹ",
  },
  {
    icon: "certificate",
    text: "Chứng nhận an toàn",
  },
];

// Banner animation configurations
export const animationConfig = {
  autoSlideInterval: 8000, // 8 seconds
  transitionDuration: 800, // 0.8 seconds
  hoverPauseDuration: 2000, // 2 seconds
  fadeInDelay: {
    badge: 200,
    headline: 400,
    subheadline: 600,
    cta: 800,
  },
};

// Responsive breakpoints for banner sizing
export const breakpoints = {
  mobile: {
    width: 375,
    height: 450,
    fontSize: {
      headline: "28px",
      subheadline: "16px",
    },
  },
  tablet: {
    width: 768,
    height: 550,
    fontSize: {
      headline: "48px",
      subheadline: "18px",
    },
  },
  desktop: {
    width: 1920,
    height: 600,
    fontSize: {
      headline: "64px",
      subheadline: "24px",
    },
  },
};

// SEO optimization utilities
export const generateSEOAltText = (slide: BannerSlide): string => {
  const keywords = [
    "shop mẹ và bé",
    "sản phẩm an toàn cho bé",
    "chăm sóc mẹ và bé",
    slide.category === "newborn" ? "sơ sinh" : "",
    slide.category === "maternity" ? "bà bầu" : "",
    "chất lượng cao",
  ].filter(Boolean);

  return `${slide.headline} - ${keywords.join(" - ")}`;
};

export const generateStructuredData = (slides: BannerSlide[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shop Mẹ và Bé",
    description: "Sản phẩm an toàn, chất lượng cho bé yêu",
    url: "https://mevabe.vn",
    logo: "/images/logo/mevabe-logo.webp",
    sameAs: ["https://facebook.com/mevabe", "https://instagram.com/mevabe"],
    offers: slides.map((slide) => ({
      "@type": "Offer",
      name: slide.headline,
      description: slide.subheadline,
      image: slide.image,
    })),
  };
};

// Performance optimization utilities
export const preloadImages = (slides: BannerSlide[]) => {
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
};

export const lazyLoadImage = (
  src: string,
  alt: string
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
    img.alt = alt;
  });
};

// Accessibility utilities
export const generateAriaLabel = (
  slide: BannerSlide,
  index: number,
  total: number
): string => {
  return `Slide ${index + 1} of ${total}: ${slide.headline}. ${
    slide.subheadline
  }`;
};

export const keyboardNavigation = {
  ArrowLeft: "previous",
  ArrowRight: "next",
  Home: "first",
  End: "last",
  Space: "pause",
  Enter: "activate",
} as const;

// Analytics tracking
export const trackBannerInteraction = (
  action: string,
  slideId: string,
  ctaText?: string
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "banner_interaction", {
      action,
      slide_id: slideId,
      cta_text: ctaText,
      timestamp: new Date().toISOString(),
    });
  }
};

// Content management utilities
export const getCurrentSeason = (): keyof typeof seasonalBanners => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
};

export const getHolidayBanner = (): string | null => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // Tết (Late January/Early February) - approximate
  if ((month === 1 && day >= 20) || (month === 2 && day <= 20)) return "tet";

  // Children's Day (June 1)
  if (month === 6 && day === 1) return "childrensDay";

  // Mother's Day (Second Sunday of May) - simplified to whole May
  if (month === 5) return "mothersDay";

  return null;
};

export default bannerSlides;
