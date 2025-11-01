"use client";
import { useState } from "react";
import { ShoppingBagIcon, GiftIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function BannerVariant2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-cyan-50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating Hearts */}
          <div className="absolute top-20 left-[10%] text-pink-300 text-2xl animate-bounce delay-100">💕</div>
          <div className="absolute top-32 right-[15%] text-blue-300 text-xl animate-bounce delay-300">🍼</div>
          <div className="absolute bottom-40 left-[20%] text-yellow-300 text-lg animate-bounce delay-500">⭐</div>
          <div className="absolute top-40 left-[70%] text-pink-300 text-xl animate-bounce delay-700">🧸</div>
          <div className="absolute bottom-32 right-[25%] text-cyan-300 text-lg animate-bounce delay-900">👶</div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#0BA6DF]/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Header Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0BA6DF] to-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
            <SparklesIcon className="w-5 h-5" />
            <span className="font-semibold">Shop Mẹ & Bé #1 Việt Nam</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="block text-gray-800">Chăm sóc</span>
              <span className="block bg-gradient-to-r from-[#0BA6DF] via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Mẹ & Bé
              </span>
              <span className="block text-gray-600 text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
                với tình yêu trọn vẹn 💝
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Hơn <span className="font-bold text-[#0BA6DF]">10.000+</span> sản phẩm chất lượng cao, 
            an toàn cho mẹ và bé. Được tin tưởng bởi 
            <span className="font-bold text-pink-500"> hàng triệu gia đình</span> trên toàn quốc.
          </p>

          {/* Product Categories Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-12">
            <div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">🍼</div>
              <h3 className="font-semibold text-gray-800">Sữa & Dinh dưỡng</h3>
              <p className="text-sm text-gray-600 mt-1">500+ sản phẩm</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">👕</div>
              <h3 className="font-semibold text-gray-800">Thời trang</h3>
              <p className="text-sm text-gray-600 mt-1">1000+ mẫu mã</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">🧸</div>
              <h3 className="font-semibold text-gray-800">Đồ chơi</h3>
              <p className="text-sm text-gray-600 mt-1">2000+ món đồ</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">🧴</div>
              <h3 className="font-semibold text-gray-800">Chăm sóc</h3>
              <p className="text-sm text-gray-600 mt-1">800+ sản phẩm</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/client/san-pham" 
                className="group bg-gradient-to-r from-[#0BA6DF] to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-3"
              >
                <ShoppingBagIcon className="w-7 h-7" />
                <span>Khám phá ngay</span>
                <div className="w-0 group-hover:w-3 h-3 bg-white rounded-full transition-all duration-300"></div>
              </a>
              
              <a 
                href="/client/khuyen-mai" 
                className="group bg-gradient-to-r from-pink-500 to-orange-400 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-3"
              >
                <GiftIcon className="w-7 h-7" />
                <span>Ưu đãi hot</span>
                <span className="animate-pulse">🔥</span>
              </a>
            </div>

            {/* Special Offer Alert */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white p-6 rounded-3xl shadow-xl inline-block animate-pulse">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl animate-spin">🎯</span>
                <div className="text-center">
                  <p className="font-bold text-lg">SIÊU SALE CUỐI THÁNG</p>
                  <p className="text-sm opacity-90">Giảm 70% + Freeship toàn quốc</p>
                </div>
                <span className="text-3xl animate-bounce">⚡</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 opacity-75">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Giao hàng nhanh 2H</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Bảo hành chính hãng</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Đổi trả miễn phí</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}