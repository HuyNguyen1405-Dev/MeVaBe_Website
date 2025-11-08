"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/outline";
import "./category-styles.css";

const categories = [
  {
    id: 1,
    name: "Sữa & Dinh dưỡng",
    image: "/images/categories/milk-nutrition.webp",
    href: "/client/san-pham?category=sua-dinh-duong",
    productCount: 156,
    description: "Sữa bột, thực phẩm bổ sung dinh dưỡng cho bé",
    alt: "Danh mục sản phẩm sữa và dinh dưỡng cho bé - Shop mẹ và bé",
    gradient: "from-pink-100 to-orange-100",
    featured: true,
  },
  {
    id: 2,
    name: "Tã & Bỉm",
    image: "/images/categories/diapers.webp",
    href: "/client/san-pham?category=ta-bim",
    productCount: 89,
    description: "Tã giấy, tã vải cao cấp an toàn cho bé",
    alt: "Danh mục tã bỉm cho bé - Sản phẩm chăm sóc mẹ và bé",
    gradient: "from-blue-100 to-cyan-100",
    featured: true,
  },
  {
    id: 3,
    name: "Đồ chơi",
    image: "/images/categories/toys.webp",
    href: "/client/san-pham?category=do-choi",
    productCount: 234,
    description: "Đồ chơi giáo dục, vui chơi an toàn cho trẻ",
    alt: "Đồ chơi trẻ em an toàn - Shop mẹ và bé uy tín",
    gradient: "from-purple-100 to-pink-100",
    featured: false,
  },
  {
    id: 4,
    name: "Thời trang bé",
    image: "/images/categories/baby-fashion.webp",
    href: "/client/san-pham?category=thoi-trang",
    productCount: 167,
    description: "Quần áo, phụ kiện thời trang cho bé yêu",
    alt: "Thời trang trẻ em - Quần áo bé trai bé gái",
    gradient: "from-yellow-100 to-orange-100",
    featured: false,
  },
  {
    id: 5,
    name: "Chăm sóc bé",
    image: "/images/categories/baby-care.webp",
    href: "/client/san-pham?category=cham-soc",
    productCount: 98,
    description: "Sữa tắm, dầu gội, kem dưỡng cho bé",
    alt: "Sản phẩm chăm sóc bé - Mỹ phẩm trẻ em an toàn",
    gradient: "from-green-100 to-emerald-100",
    featured: true,
  },
  {
    id: 6,
    name: "Xe đẩy & Ghế ngồi",
    image: "/images/categories/strollers.webp",
    href: "/client/san-pham?category=xe-day-ghe-ngoi",
    productCount: 45,
    description: "Xe đẩy, ghế ăn dặm, ghế ngồi ô tô an toàn",
    alt: "Xe đẩy em bé và ghế ngồi ô tô - Đồ dùng mẹ và bé",
    gradient: "from-indigo-100 to-blue-100",
    featured: false,
  },
];

export default function CategoryList() {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#category-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (categoryId: number) => {
    setLoadedImages((prev) => new Set(prev).add(categoryId));
  };

  return (
    <section
      id="category-section"
      className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#0ba6df]/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#0ba6df]/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0ba6df] to-blue-600 rounded-2xl mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 leading-tight">
            Danh Mục Sản Phẩm
            <br className="sm:hidden" />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0ba6df]">
              Mẹ & Bé
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập sản phẩm chăm sóc mẹ và bé được tin tưởng bởi
            hàng nghìn gia đình Việt Nam
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group block transition-all duration-500 h-full ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div
                className={`category-card relative bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col ${
                  category.featured ? "ring-2 ring-[#0ba6df]/20" : ""
                }`}
              >
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="featured-badge bg-gradient-to-r from-[#0ba6df] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                      <StarIcon className="w-3 h-3" />
                      <span>Hot</span>
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Category Image */}
                <div className="relative mb-4 aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden shadow-inner">
                  {!loadedImages.has(category.id) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                  )}
                  <img
                    src={category.image}
                    alt={category.alt}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                      loadedImages.has(category.id)
                        ? "opacity-100"
                        : "opacity-0"
                    } ${
                      hoveredCategory === category.id
                        ? "brightness-110 contrast-105"
                        : ""
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(category.id)}
                  />

                  {/* Product Count Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#0ba6df] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {category.productCount}+ sản phẩm
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Category Info - flex-grow to fill available space */}
                <div className="relative z-10 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0ba6df] transition-colors duration-300 leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* CTA Button - positioned at bottom */}
                  <div className="btn-primary flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0ba6df] to-blue-600 hover:from-blue-600 hover:to-[#0ba6df] text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 mt-auto">
                    <span>Khám phá ngay</span>
                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0ba6df]/10 to-transparent rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-200/20 to-transparent rounded-tr-full opacity-50"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12 lg:mt-16">
          <Link
            href="/client/san-pham"
            className="btn-primary group inline-flex items-center space-x-3 bg-gradient-to-r from-[#0ba6df] via-blue-600 to-[#0ba6df] hover:from-blue-700 hover:via-[#0ba6df] hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span>Xem tất cả danh mục sản phẩm</span>
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Category Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-16">
          <div className="stat-card bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group hover:-translate-y-1">
            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0ba6df] to-blue-600 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                Danh mục chính
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-white to-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 group hover:-translate-y-1">
            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                900+
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                Sản phẩm chất lượng
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-white to-yellow-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 group hover:-translate-y-1">
            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                Thương hiệu uy tín
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-white to-green-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group hover:-translate-y-1">
            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                Hỗ trợ tận tình
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Chính hãng 100%</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">An toàn cho bé</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Giao hàng nhanh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
