"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const categories = [
  {
    id: 1,
    name: "Sữa & Dinh dưỡng",
    image: "/images/categories/milk-nutrition.jpg",
    icon: "🍼",
    href: "/client/san-pham?category=sua-dinh-duong",
    productCount: 156,
    description: "Sữa bột, thực phẩm bổ sung dinh dưỡng",
  },
  {
    id: 2,
    name: "Tã & Bỉm",
    image: "/images/categories/diapers.jpg",
    icon: "👶",
    href: "/client/san-pham?category=ta-bim",
    productCount: 89,
    description: "Tã giấy, tã vải cao cấp",
  },
  {
    id: 3,
    name: "Đồ chơi",
    image: "/images/categories/toys.jpg",
    icon: "🧸",
    href: "/client/san-pham?category=do-choi",
    productCount: 234,
    description: "Đồ chơi giáo dục, vui chơi an toàn",
  },
  {
    id: 4,
    name: "Thời trang bé",
    image: "/images/categories/baby-fashion.jpg",
    icon: "👕",
    href: "/client/san-pham?category=thoi-trang",
    productCount: 167,
    description: "Quần áo, phụ kiện cho bé",
  },
  {
    id: 5,
    name: "Chăm sóc bé",
    image: "/images/categories/baby-care.jpg",
    icon: "🧴",
    href: "/client/san-pham?category=cham-soc",
    productCount: 98,
    description: "Sữa tắm, dầu gội, kem dưỡng",
  },
  {
    id: 6,
    name: "Xe đẩy & Ghế ngồi",
    image: "/images/categories/strollers.jpg",
    icon: "🚗",
    href: "/client/san-pham?category=xe-day-ghe-ngoi",
    productCount: 45,
    description: "Xe đẩy, ghế ăn dặm, ghế ngồi ô tô",
  },
  {
    id: 7,
    name: "Bình sữa & Ty ngậm",
    image: "/images/categories/bottles.jpg",
    icon: "🍼",
    href: "/client/san-pham?category=binh-sua",
    productCount: 67,
    description: "Bình sữa, ty ngậm, phụ kiện ăn uống",
  },
  {
    id: 8,
    name: "Đồ dùng mẹ bầu",
    image: "/images/categories/maternity.jpg",
    icon: "🤱",
    href: "/client/san-pham?category=me-bau",
    productCount: 73,
    description: "Sản phẩm chăm sóc mẹ bầu và sau sinh",
  },
];

export default function CategoryList() {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

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
      className="bg-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Danh mục sản phẩm
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá các danh mục sản phẩm được mẹ bỉm sữa yêu thích và tin tưởng nhất
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group block transition-all duration-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                {/* Category Icon */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors duration-200">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                </div>

                {/* Category Image */}
                <div className="relative mb-4 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  {!loadedImages.has(category.id) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02] ${
                      loadedImages.has(category.id)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(category.id)}
                  />

                  {/* Product Count Badge */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {category.productCount}+
                  </div>
                </div>

                {/* Category Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>

                  {/* View More Button */}
                  <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium text-sm">
                    <span>Xem sản phẩm</span>
                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link
            href="/client/san-pham"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span>Xem tất cả danh mục</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Category Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-gray-600 text-sm">Danh mục chính</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">900+</div>
            <div className="text-gray-600 text-sm">Sản phẩm</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Thương hiệu</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Hỗ trợ khách hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
