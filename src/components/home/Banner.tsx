"use client";
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface BannerSlide {
  title: string;
  highlight: string;
  discount: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  trustLine: string;
  fomoText: string;
  ctaText: string;
  stockLeft: string;
  image: string;
  ctaLink: string;
}

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const bannerSlides: BannerSlide[] = [
    {
      title: "GIẢM",
      highlight: "50%",
      discount: "KHUYẾN MÃI ĐẶC BIỆT",
      subtitle: "BỈM HUGGIES PREMIUM",
      price: "159K",
      originalPrice: "318K",
      trustLine: "100% chính hãng • Đổi trả 30 ngày",
      fomoText: "127 gói còn lại",
      ctaText: "MUA NGAY",
      stockLeft: "127 gói",
      image: "/images/banners/bim-huggies-baby.jpg",
      ctaLink: "/san-pham/bim-huggies-premium",
    },
    {
      title: "GIẢM",
      highlight: "40%",
      discount: "DEAL HOT TRONG NGÀY", 
      subtitle: "SỮA ABBOTT GROW GOLD",
      price: "299K",
      originalPrice: "499K", 
      trustLine: "100% chính hãng • Giao hàng 2h nội thành",
      fomoText: "89 hộp còn lại",
      ctaText: "CHỌN MUA",
      stockLeft: "89 hộp",
      image: "/images/banners/luxury-baby-hero.webp",
      ctaLink: "/san-pham/sua-abbott-grow-gold",
    },
    {
      title: "GIẢM", 
      highlight: "35%",
      discount: "FLASH SALE 24H",
      subtitle: "XE ĐẨY SEEBABY T08",
      price: "1.999K",
      originalPrice: "3.099K",
      trustLine: "100% chính hãng • Bảo hành 24 tháng", 
      fomoText: "23 chiếc còn lại",
      ctaText: "CHỐT ĐƠN",
      stockLeft: "23 chiếc",
      image: "/images/banners/banner-promotion.svg", 
      ctaLink: "/san-pham/xe-day-seebaby-t08",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const currentSlideData = bannerSlides[currentSlide];

  return (
    <section 
      className="relative w-full h-[600px] overflow-hidden banner-gradient"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pure white background with subtle gradient - Brand Color #0ba6df */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0ba6df] via-white/95 to-white"></div>
      
      {/* Subtle soft bokeh effects - 30% negative space */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-16 left-[8%] w-40 h-40 bg-white/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[12%] w-32 h-32 bg-[#0ba6df]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full flex items-center relative z-10 px-4">
        
        {/* Left Content Section - 60% width for mobile crop protection */}
        <div className="w-full lg:w-[60%] space-y-10 mobile-crop-safe">
          
          {/* FOMO Badge - Minimal pill design */}
          <div className="inline-flex items-center bg-[#ff4757]/5 backdrop-blur-sm border border-[#ff4757]/20 rounded-full px-5 py-2.5 elegant-hover">
            <div className="w-2 h-2 bg-[#ff4757] rounded-full animate-ping mr-3"></div>
            <span className="text-sm font-inter-medium text-[#ff4757] font-medium">
              {currentSlideData.fomoText}
            </span>
          </div>

          {/* Main Title - Inter ExtraBold 78px with -0.5px letter spacing */}
          <div className="space-y-6">
            <h1 className="font-inter-extrabold text-6xl lg:text-[78px] text-[#0ba6df] leading-none letter-spacing-tight banner-text-shadow">
              {currentSlideData.title}{" "}
              <span className="text-[#0ba6df]">{currentSlideData.highlight}</span>{" "}
              <span className="text-gray-800">OFF</span>
              <br />
              <span className="text-gray-800 text-4xl lg:text-5xl font-inter-medium">
                {currentSlideData.subtitle}
              </span>
            </h1>
          </div>

          {/* Subtitle Line - Inter Medium 36px */}
          <p className="font-inter-medium text-2xl lg:text-[36px] text-gray-600 leading-relaxed max-w-2xl">
            Chỉ từ <span className="text-[#0ba6df] font-semibold">{currentSlideData.price}</span> • Giao hàng 2h nội thành
          </p>

          {/* Trust Line - Small text in brand color */}
          <p className="text-base font-inter-medium text-[#0ba6df]">
            {currentSlideData.trustLine}
          </p>

          {/* CTA Button with enhanced hover glow and micro-interactions */}
          <div className="flex items-center space-x-6 pt-4">
            <a
              href={currentSlideData.ctaLink}
              className={`group relative bg-[#0ba6df] hover:bg-[#0891b2] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center space-x-3 elegant-hover micro-scale ${
                isHovered ? "micro-glow" : ""
              }`}
            >
              <ShoppingCartIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-inter-medium">{currentSlideData.ctaText}</span>
              
              {/* Animated heartbeat line under CTA */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/60 group-hover:w-3/4 transition-all duration-500 animate-heartbeat"></div>
            </a>
          </div>
        </div>

        {/* Right Image Section - Vietnamese Baby with premium white linen cushion */}
        <div className="hidden lg:flex w-[40%] h-full items-center justify-center relative">
          
          {/* Main Baby Image Container with soft morning light effect */}
          <div className="relative">
            {/* Soft morning light gradient from left */}
            <div className="absolute -inset-8 bg-gradient-to-r from-white/30 via-[#fff9f5]/20 to-transparent rounded-full blur-2xl"></div>
            
            {/* Premium white linen cushion effect */}
            <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-[#fff9f5] via-white to-[#f8f9fa] rounded-full flex items-center justify-center banner-floating-element">
              <img
                src={currentSlideData.image}
                alt={`Khuyến mãi ${currentSlideData.subtitle} giảm ${currentSlideData.highlight} chỉ ${currentSlideData.price}k – Shop Mẹ Bé – Giao hàng nhanh, chính hãng`}
                className="w-64 h-64 object-cover rounded-full webp-optimized"
                loading="lazy"
              />
            </div>

            {/* 3D Floating Product with soft light */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/95 backdrop-blur-sm rounded-xl banner-soft-shadow flex items-center justify-center animate-bounce-slow border border-[#0ba6df]/5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0ba6df]/15 to-[#0ba6df]/5 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Floating Price Tag with soft ribbon - Minimalist */}
        <div className="absolute top-12 right-8 lg:right-[42%] bg-white/98 backdrop-blur-sm border border-[#0ba6df]/10 rounded-2xl px-8 py-5 banner-floating-element elegant-hover">
          <div className="text-center">
            <div className="text-sm font-inter-medium text-gray-500 mb-1">Giá ưu đãi</div>
            <div className="text-3xl font-black text-[#0ba6df] mb-1">{currentSlideData.price}</div>
            <div className="text-sm line-through text-gray-400">{currentSlideData.originalPrice}</div>
          </div>
          {/* Subtle ribbon effect */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0ba6df] rounded-full flex items-center justify-center banner-soft-shadow">
            <span className="text-white text-xs font-bold">%</span>
          </div>
        </div>

        {/* Slide Indicators - Elegant minimalist design */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 elegant-hover ${
                index === currentSlide
                  ? "bg-[#0ba6df] w-12 banner-soft-shadow"
                  : "bg-white/60 w-2 hover:bg-[#0ba6df]/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SEO Optimized Alt Text - Hidden for accessibility */}
      <span className="sr-only">
        Khuyến mãi {currentSlideData.subtitle} giảm {currentSlideData.highlight} chỉ {currentSlideData.price}k – Shop Mẹ Bé – Giao hàng nhanh, chính hãng
      </span>
    </section>
  );
}
