"use client";
import { useState, useEffect } from "react";
import {
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function BannerVariant3() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Chị Hương - Hà Nội",
      text: "Sản phẩm chất lượng tuyệt vời, bé nhà mình rất thích!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Anh Minh - TP.HCM",
      text: "Giao hàng nhanh, đóng gói cẩn thận, sẽ mua lại!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Chị Lan - Đà Nẵng",
      text: "Giá cả hợp lý, chất lượng vượt mong đợi!",
      rating: 5,
      avatar: "👩‍🏫",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0BA6DF]/80 to-blue-900/80"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/30 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Premium Quality Since 2020</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Không gian</span>
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Yêu thương
                </span>
                <span className="block text-3xl md:text-4xl text-white/80 font-medium mt-4">
                  cho mẹ và bé ✨
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Khám phá bộ sưu tập đặc biệt được tuyển chọn kỹ lưỡng từ những
              thương hiệu uy tín hàng đầu thế giới, mang đến trải nghiệm mua sắm
              hoàn hảo.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-white/90">
                  Chứng nhận quốc tế FDA & CE
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-white/90">
                  Giao hàng Express trong 2 giờ
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-white/90">
                  Bảo hành lifetime cho một số sản phẩm
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a
                href="/client/san-pham"
                className="group bg-white text-[#0BA6DF] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Tham quan showroom
              </a>

              <button className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                <PlayIcon className="w-6 h-6" />
                <span>Xem video giới thiệu</span>
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Gallery */}
          <div className="relative">
            {/* Main Product Showcase */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🍼</div>
                  <h3 className="font-bold text-gray-800 text-center">
                    Sữa bột
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Dinh dưỡng tối ưu
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🧸</div>
                  <h3 className="font-bold text-gray-800 text-center">
                    Đồ chơi
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Phát triển trí tuệ
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">👕</div>
                  <h3 className="font-bold text-gray-800 text-center">
                    Thời trang
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Phong cách hiện đại
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">🧴</div>
                  <h3 className="font-bold text-gray-800 text-center">
                    Chăm sóc
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    An toàn tuyệt đối
                  </p>
                </div>
              </div>

              {/* Testimonials Carousel */}
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-800">
                    Khách hàng nói gì?
                  </h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) =>
                            (prev - 1 + testimonials.length) %
                            testimonials.length
                        )
                      }
                      className="p-2 bg-[#0BA6DF] text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) => (prev + 1) % testimonials.length
                        )
                      }
                      className="p-2 bg-[#0BA6DF] text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="text-2xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex justify-center space-x-1">
                    {Array.from({
                      length: testimonials[currentTestimonial].rating,
                    }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="font-semibold text-[#0BA6DF]">
                    {testimonials[currentTestimonial].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="text-center">
                <div className="font-bold text-xl">15K+</div>
                <div className="text-xs">Đơn hàng/tháng</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-cyan-500 text-white p-4 rounded-2xl shadow-xl animate-pulse">
              <div className="text-center">
                <div className="font-bold text-xl">4.9★</div>
                <div className="text-xs">Đánh giá</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
