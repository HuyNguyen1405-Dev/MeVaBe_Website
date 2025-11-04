"use client";
import { useState, useEffect } from "react";

const brands = [
  { id: 1, name: "Co.op", logo: "/images/brands/coop.png", alt: "Co.op - Thương hiệu uy tín" },
  { id: 2, name: "Bibo", logo: "/images/brands/bibo.png", alt: "Bibo - Đồ uống dinh dưỡng" },
  { id: 3, name: "Pigeon", logo: "/images/brands/pigeon.png", alt: "Pigeon - Sản phẩm cho mẹ và bé" },
  { id: 4, name: "Friso", logo: "/images/brands/friso.png", alt: "Friso - Sữa bột cao cấp" },
  { id: 5, name: "Pampers", logo: "/images/brands/pampers.png", alt: "Pampers - Tã bỉm hàng đầu" },
  { id: 6, name: "Johnson's", logo: "/images/brands/johnsons.png", alt: "Johnson's - Chăm sóc bé yêu" },
  { id: 7, name: "Huggies", logo: "/images/brands/huggies.png", alt: "Huggies - Tã bỉm cao cấp" },
  { id: 8, name: "NAN", logo: "/images/brands/nan.png", alt: "NAN - Sữa bột chất lượng" }
];

export default function BrandPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thương hiệu đối tác
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hợp tác cùng các thương hiệu hàng đầu thế giới để mang đến sản phẩm chất lượng tốt nhất
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-w-full max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(brands.length / 2) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 gap-4 px-4">
                  {brands.slice(slideIndex * 2, slideIndex * 2 + 2).map((brand) => (
                    <div
                      key={brand.id}
                      className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.alt}
                        className="max-w-full max-h-10 object-contain filter grayscale"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(brands.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-blue-600 w-8" 
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-blue-600 transition-colors group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🏆</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Chính hãng 100%</h3>
            <p className="text-sm text-gray-600">Nhập khẩu trực tiếp từ nhà sản xuất</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-emerald-600 transition-colors group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Bảo hành chính hãng</h3>
            <p className="text-sm text-gray-600">Hỗ trợ bảo hành tại tất cả chi nhánh</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-orange-600 transition-colors group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🚚</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Giao hàng nhanh</h3>
            <p className="text-sm text-gray-600">Giao hàng trong 2-24h tại TP.HCM</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-purple-600 transition-colors group">
              <span className="text-2xl group-hover:scale-110 transition-transform">💝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quà tặng hấp dẫn</h3>
            <p className="text-sm text-gray-600">Tích điểm đổi quà cho khách hàng thân thiết</p>
          </div>
        </div>
      </div>
    </section>
  );
}