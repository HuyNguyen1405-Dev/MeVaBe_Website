import { Metadata } from "next";

// SEO metadata cho Brand Partners section
export const brandPartnersMetadata: Metadata = {
  title: "Thương hiệu đối tác - Sản phẩm mẹ và bé chính hãng | MeVaBe",
  description: "Hợp tác với các thương hiệu mẹ và bé hàng đầu thế giới như Pigeon, Friso, Pampers, Huggies. Cam kết chính hãng 100%, giao hàng nhanh, bảo hành chính hãng.",
  keywords: [
    "thương hiệu mẹ và bé",
    "sản phẩm chính hãng",
    "Pigeon Vietnam",
    "Friso sữa bột",
    "Pampers tã bỉm",
    "Huggies cao cấp",
    "Johnson's baby",
    "NAN Nestlé",
    "đối tác uy tín",
    "mẹ và bé Việt Nam"
  ],
  openGraph: {
    title: "Thương hiệu đối tác - Sản phẩm mẹ và bé chính hãng",
    description: "Hợp tác với các thương hiệu mẹ và bé hàng đầu. Cam kết chính hãng 100%, giao hàng nhanh.",
    type: "website",
    siteName: "MeVaBe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thương hiệu đối tác - Sản phẩm mẹ và bé chính hãng",
    description: "Hợp tác với các thương hiệu mẹ và bé hàng đầu. Cam kết chính hãng 100%, giao hàng nhanh.",
  }
};

// Structured Data for SEO
export const brandPartnersStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MeVaBe",
  "description": "Cửa hàng sản phẩm mẹ và bé uy tín tại Việt Nam",
  "url": "https://mevabe.com",
  "logo": "https://mevabe.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-xxx-xxx-xxx",
    "contactType": "customer service",
    "availableLanguage": ["Vietnamese"]
  },
  "sameAs": [
    "https://facebook.com/mevabe",
    "https://instagram.com/mevabe"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sản phẩm mẹ và bé",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Sữa bột",
        "description": "Sữa bột chính hãng từ các thương hiệu hàng đầu như Friso, NAN"
      },
      {
        "@type": "OfferCatalog", 
        "name": "Tã bỉm",
        "description": "Tã bỉm cao cấp Pampers, Huggies cho bé từ sơ sinh đến 36 tháng"
      },
      {
        "@type": "OfferCatalog",
        "name": "Đồ dùng chăm sóc bé",
        "description": "Sản phẩm chăm sóc bé từ thương hiệu Pigeon, Johnson's"
      }
    ]
  },
  "brand": [
    {
      "@type": "Brand",
      "name": "Pigeon",
      "description": "Thương hiệu Nhật Bản chuyên sản phẩm chăm sóc mẹ và bé",
      "logo": "/images/brands/pigeon.png"
    },
    {
      "@type": "Brand", 
      "name": "Friso",
      "description": "Thương hiệu sữa bột cao cấp từ Hà Lan",
      "logo": "/images/brands/friso.png"
    },
    {
      "@type": "Brand",
      "name": "Pampers",
      "description": "Thương hiệu tã bỉm số 1 thế giới",
      "logo": "/images/brands/pampers.png"
    },
    {
      "@type": "Brand",
      "name": "Huggies",
      "description": "Thương hiệu tã bỉm cao cấp từ Mỹ",
      "logo": "/images/brands/huggies.png"
    }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "description": "Sản phẩm mẹ và bé chính hãng với giá tốt nhất",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-01-01",
    "seller": {
      "@type": "Organization",
      "name": "MeVaBe"
    }
  }
};

// Component để inject structured data
export function BrandPartnersStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(brandPartnersStructuredData)
      }}
    />
  );
}