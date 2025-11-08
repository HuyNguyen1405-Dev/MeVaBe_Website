import React from "react";
import Banner from "@/components/home/Banner";
import CategoryList from "@/components/home/CategoryList";
import PromotionProducts from "@/components/home/PromotionProducts";
import BrandPartners from "@/components/home/BrandPartners";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import BlogSection from "@/components/home/BlogSection";
import CommitmentSection from "@/components/home/CommitmentSection";

// SEO Metadata
export const metadata = {
  title: "Shop Mẹ & Bé - Sản phẩm chất lượng cao cho mẹ và bé yêu",
  description:
    "Chuyên cung cấp sữa bột, tã bỉm, đồ chơi, xe đẩy và các sản phẩm chăm sóc mẹ và bé hàng đầu. Giao hàng nhanh, cam kết chính hãng 100%.",
  keywords:
    "shop mẹ và bé, sữa bột, tã bỉm, đồ chơi trẻ em, xe đẩy em bé, sản phẩm mẹ và bé",
  openGraph: {
    title: "Shop Mẹ & Bé - Sản phẩm chất lượng cao",
    description:
      "Chuyên cung cấp sữa bột, tã bỉm, đồ chơi và các sản phẩm chăm sóc mẹ và bé",
    type: "website",
    locale: "vi_VN",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen hardware-accelerated">
      {/* SLIDER HERO - Banner ưu đãi với CTA */}
      <section aria-label="Banner chính" className="stagger-animation">
        <Banner />
      </section>

      {/* SECTION 1: DANH MỤC NỔI BẬT - 6-8 ô vuông lazy load */}
      <section
        aria-label="Danh mục sản phẩm nổi bật"
        className="stagger-animation stagger-delay-1"
      >
        <CategoryList />
      </section>

      {/* SECTION 2: SẢN PHẨM KHUYẾN MÃI - Slider 8-12 sản phẩm */}
      <section
        aria-label="Sản phẩm đang khuyến mãi"
        className="stagger-animation stagger-delay-2"
      >
        <PromotionProducts />
      </section>

      {/* SECTION 3: THƯƠNG HIỆU - Logo đối tác */}
      <section
        aria-label="Thương hiệu đối tác"
        className="stagger-animation stagger-delay-3"
      >
        <BrandPartners />
      </section>

      {/* SECTION 4: SẢN PHẨM BÁN CHẠY - Grid 3 cột (mobile: 2 cột) */}
      <section
        aria-label="Sản phẩm bán chạy nhất"
        className="stagger-animation stagger-delay-4"
      >
        <BestSellingProducts />
      </section>

      {/* SECTION 5: BLOG / TƯ VẤN - 3 bài mới nhất (SEO content) */}
      <section
        aria-label="Blog và tư vấn chăm sóc mẹ và bé"
        className="stagger-animation stagger-delay-5"
      >
        <BlogSection />
      </section>

      {/* SECTION 6: CHỨNG NHẬN & CAM KẾT - 4-6 icon */}
      <section
        aria-label="Chứng nhận chất lượng và cam kết dịch vụ"
        className="stagger-animation stagger-delay-5"
      >
        <CommitmentSection />
      </section>
    </main>
  );
}
