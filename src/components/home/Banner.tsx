"use client";
import { useState, useEffect } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "Yêu thương",
      highlight: "Mẹ & Bé",
      subtitle: "mỗi ngày",
      description:
        "Chúng tôi mang đến sản phẩm an toàn, chất lượng cao cho mẹ và bé yêu của bạn.",
      image: "/images/banners/banner-mom-baby.svg",
      bgGradient: "from-primary-50 via-secondary-50 to-primary-100",
    },
    {
      title: "Chất lượng",
      highlight: "Đỉnh cao",
      subtitle: "an toàn tuyệt đối",
      description:
        "Sản phẩm được kiểm định nghiêm ngặt, đảm bảo 100% an toàn cho sức khỏe mẹ và bé.",
      image: "/images/banners/banner-quality.svg",
      bgGradient: "from-success-50 via-primary-50 to-secondary-100",
    },
    {
      title: "Ưu đãi",
      highlight: "Siêu hấp dẫn",
      subtitle: "hôm nay",
      description:
        "Miễn phí vận chuyển toàn quốc, bảo hành 12 tháng, đổi trả trong 7 ngày.",
      image: "/images/banners/banner-promotion.svg",
      bgGradient: "from-warning-50 via-accent-50 to-warning-100",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = bannerContent[currentSlide];

  return (
    <section
      className={`relative bg-gradient-to-br ${currentContent.bgGradient} py-16 overflow-hidden transition-all duration-1000`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warning-200/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-primary">
                <ShieldCheckIcon className="w-5 h-5 text-success-500" />
                <span className="text-sm font-medium text-gray-700">
                  Chứng nhận FDA
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-primary">
                <StarIcon className="w-5 h-5 text-warning-500" />
                <span className="text-sm font-medium text-gray-700">
                  4.9★ Đánh giá
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-primary">
                <TruckIcon className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium text-gray-700">
                  Giao hàng 2h
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">{currentContent.title} </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
                  {currentContent.highlight}
                </span>
                <br />
                <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">
                  {currentContent.subtitle}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              {currentContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a
                href="/client/san-pham"
                className="group relative bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-primary hover:shadow-primary-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
              >
                <ShoppingCartIcon className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Mua ngay</span>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>

              <a
                href="/client/yeu-thich"
                className="group bg-white/80 backdrop-blur-sm text-primary-400 px-8 py-4 rounded-full font-semibold text-lg shadow-primary hover:shadow-primary-lg border-2 border-primary-400/30 hover:border-primary-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <HeartIcon className="w-6 h-6" />
                <span>Yêu thích</span>
              </a>
            </div>

            {/* Promotion Banner */}
            <div className="bg-gradient-accent text-white p-4 rounded-2xl shadow-accent inline-block mt-6 animate-bounce">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-bold text-sm">FLASH SALE</p>
                  <p className="text-xs opacity-90">
                    Giảm đến 50% - Chỉ hôm nay!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={currentContent.image}
                  alt="Mẹ và bé"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-warning-400 text-warning-900 p-3 rounded-full shadow-lg animate-bounce delay-500 z-20">
                <span className="text-sm font-bold">NEW</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-success-500 text-white p-3 rounded-full shadow-lg animate-pulse z-20">
                <span className="text-sm font-bold">-30%</span>
              </div>

              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-full scale-110 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary-400 scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-primary hover:shadow-primary-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary-400">10K+</div>
            <div className="text-gray-600 text-sm mt-1">Khách hàng tin yêu</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-primary hover:shadow-primary-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary-400">5000+</div>
            <div className="text-gray-600 text-sm mt-1">
              Sản phẩm chất lượng
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-primary hover:shadow-primary-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary-400">24/7</div>
            <div className="text-gray-600 text-sm mt-1">Hỗ trợ khách hàng</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-primary hover:shadow-primary-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-primary-400">98%</div>
            <div className="text-gray-600 text-sm mt-1">
              Khách hàng hài lòng
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
