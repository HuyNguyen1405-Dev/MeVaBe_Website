"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BrandPartnersStructuredData } from "./BrandPartnersSEO";
import "./brand-partners-styles.css";

const brands = [
  {
    id: 1,
    name: "Co.op",
    logo: "/images/brands/coop.png",
    alt: "Co.op - Thương hiệu bán lẻ uy tín cho mẹ và bé tại Việt Nam",
  },
  {
    id: 2,
    name: "Bibo",
    logo: "/images/brands/bibo.png",
    alt: "Bibo - Thương hiệu đồ uống dinh dưỡng cho trẻ em và mẹ bầu",
  },
  {
    id: 3,
    name: "Pigeon",
    logo: "/images/brands/pigeon.png",
    alt: "Pigeon - Thương hiệu Nhật Bản chuyên sản phẩm chăm sóc mẹ và bé",
  },
  {
    id: 4,
    name: "Friso",
    logo: "/images/brands/friso.png",
    alt: "Friso - Thương hiệu sữa bột cao cấp từ Hà Lan cho trẻ sơ sinh",
  },
  {
    id: 5,
    name: "Pampers",
    logo: "/images/brands/pampers.png",
    alt: "Pampers - Thương hiệu tã bỉm số 1 thế giới cho bé yêu",
  },
  {
    id: 6,
    name: "Johnson's",
    logo: "/images/brands/johnsons.png",
    alt: "Johnson's - Thương hiệu chăm sóc da và tắm gội cho trẻ sơ sinh",
  },
  {
    id: 7,
    name: "Huggies",
    logo: "/images/brands/huggies.png",
    alt: "Huggies - Thương hiệu tã bỉm cao cấp cho bé từ 0-36 tháng tuổi",
  },
  {
    id: 8,
    name: "NAN",
    logo: "/images/brands/nan.png",
    alt: "NAN - Thương hiệu sữa bột Nestlé chất lượng cao cho trẻ nhỏ",
  },
];

const trustIndicators = [
  {
    id: 1,
    icon: "🏆",
    title: "Chính hãng 100%",
    description: "Nhập khẩu trực tiếp từ nhà sản xuất, đảm bảo chất lượng",
    bgColor: "bg-[#0ba6df]/10",
    hoverColor: "hover:bg-[#0ba6df]",
    ariaLabel: "Cam kết sản phẩm chính hãng"
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Bảo hành chính hãng",
    description: "Hỗ trợ bảo hành toàn quốc theo tiêu chuẩn nhà sản xuất",
    bgColor: "bg-emerald-100",
    hoverColor: "hover:bg-emerald-500",
    ariaLabel: "Dịch vụ bảo hành chính hãng"
  },
  {
    id: 3,
    icon: "🚚",
    title: "Giao hàng nhanh",
    description: "Giao hàng trong 2-24h tại TP.HCM và các tỉnh thành",
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-500",
    ariaLabel: "Dịch vụ giao hàng nhanh"
  },
  {
    id: 4,
    icon: "💝",
    title: "Quà tặng hấp dẫn",
    description: "Tích điểm đổi quà và nhiều ưu đãi cho khách hàng thân thiết",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-500",
    ariaLabel: "Chương trình quà tặng và ưu đãi"
  },
];

export default function BrandPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / 2));
    }, 4000);
    return () => clearInterval(timer);
  }, [isIntersecting]);

  const handleSlideClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <BrandPartnersStructuredData />
      <section 
        ref={sectionRef}
        className="brand-partners-section bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden"
        aria-label="Thương hiệu đối tác và cam kết chất lượng"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="gradient-text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Thương hiệu đối tác
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Hợp tác cùng các <strong>thương hiệu mẹ và bé</strong> hàng đầu thế giới để mang đến 
            sản phẩm chất lượng tốt nhất cho gia đình Việt
          </p>
        </header>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 mb-16 md:mb-20">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="brand-logo-card group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl brand-logo-hover cursor-pointer overflow-hidden focus-custom"
              tabIndex={0}
              role="button"
              aria-label={`Xem sản phẩm từ thương hiệu ${brand.name}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ba6df]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-4 lg:p-6 flex items-center justify-center h-20 lg:h-24">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform3d"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0ba6df] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mb-16" role="region" aria-label="Slider thương hiệu đối tác">
          <div className="mobile-slider overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out transform3d"
              style={{ 
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {Array.from({ length: Math.ceil(brands.length / 2) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-3 px-2">
                      {brands
                        .slice(slideIndex * 2, slideIndex * 2 + 2)
                        .map((brand) => (
                          <div
                            key={brand.id}
                            className="group relative bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0ba6df]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-3 sm:p-4 flex items-center justify-center h-16 sm:h-20">
                              <Image
                                src={brand.logo}
                                alt={brand.alt}
                                width={100}
                                height={50}
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform3d"
                                loading="lazy"
                                sizes="50vw"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6" role="tablist" aria-label="Chỉ số slide">
            {Array.from({ length: Math.ceil(brands.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-custom micro-bounce ${
                    index === currentIndex
                      ? "bg-[#0ba6df] w-8 shadow-sm pulse-animation"
                      : "bg-gray-300 w-2.5 hover:bg-gray-400 hover:w-4"
                  }`}
                  aria-label={`Chuyển đến slide ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                />
              )
            )}
          </div>
        </div>

        {/* Trust Indicators / Cam kết chất lượng */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Cam kết chất lượng
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những cam kết từ trái tim để mang đến trải nghiệm mua sắm tuyệt vời nhất cho mẹ và bé
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={indicator.id} 
                className="trust-indicator group text-center p-4 md:p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 micro-bounce"
              >
                <div 
                  className={`w-12 h-12 md:w-16 md:h-16 ${indicator.bgColor} ${indicator.hoverColor} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  aria-label={indicator.ariaLabel}
                >
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-0 group-hover:invert">
                    {indicator.icon}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base group-hover:text-[#0ba6df] transition-colors duration-300">
                  {indicator.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
