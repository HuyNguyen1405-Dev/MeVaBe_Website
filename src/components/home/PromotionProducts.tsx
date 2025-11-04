"use client";
import { useState, useEffect, useRef } from "react";
import { 
  ShoppingCartIcon, 
  HeartIcon, 
  EyeIcon,
  StarIcon,
  FireIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TagIcon
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

const promotionProducts = [
  {
    id: 1,
    name: "Sữa bột Friso Gold 3 - 1.5kg",
    originalPrice: 650000,
    salePrice: 455000,
    discount: 30,
    rating: 4.8,
    reviewCount: 245,
    image: "/images/products/friso-gold-3.jpg",
    category: "Sữa bột",
    isHot: true,
    inStock: true,
    sold: 150,
    flashSale: true,
    timeLeft: "02:45:30"
  },
  {
    id: 2,
    name: "Tã Pampers Premium Care Size M",
    originalPrice: 320000,
    salePrice: 224000,
    discount: 30,
    rating: 4.9,
    reviewCount: 189,
    image: "/images/products/pampers-premium.jpg",
    category: "Tã bỉm",
    isHot: true,
    inStock: true,
    sold: 89,
    flashSale: false
  },
  {
    id: 3,
    name: "Xe đẩy Joie Litetrax 4",
    originalPrice: 4200000,
    salePrice: 2940000,
    discount: 30,
    rating: 4.7,
    reviewCount: 67,
    image: "/images/products/joie-litetrax.jpg",
    category: "Xe đẩy",
    isHot: false,
    inStock: true,
    sold: 23,
    flashSale: false
  },
  {
    id: 4,
    name: "Bình sữa Pigeon PP Plus 240ml",
    originalPrice: 180000,
    salePrice: 126000,
    discount: 30,
    rating: 4.6,
    reviewCount: 134,
    image: "/images/products/pigeon-bottle.jpg",
    category: "Bình sữa",
    isHot: false,
    inStock: true,
    sold: 78,
    flashSale: true,
    timeLeft: "01:23:45"
  },
  {
    id: 5,
    name: "Đồ chơi Fisher-Price Rock & Stack",
    originalPrice: 450000,
    salePrice: 315000,
    discount: 30,
    rating: 4.8,
    reviewCount: 98,
    image: "/images/products/fisher-price-stack.jpg",
    category: "Đồ chơi",
    isHot: true,
    inStock: false,
    sold: 156,
    flashSale: false
  },
  {
    id: 6,
    name: "Sữa tắm Johnson's Baby 500ml",
    originalPrice: 95000,
    salePrice: 66500,
    discount: 30,
    rating: 4.5,
    reviewCount: 203,
    image: "/images/products/johnsons-bath.jpg",
    category: "Chăm sóc",
    isHot: false,
    inStock: true,
    sold: 234,
    flashSale: false
  },
  {
    id: 7,
    name: "Ghế ăn dặm Chicco Polly Easy",
    originalPrice: 2800000,
    salePrice: 1960000,
    discount: 30,
    rating: 4.7,
    reviewCount: 45,
    image: "/images/products/chicco-chair.jpg",
    category: "Ghế ăn",
    isHot: false,
    inStock: true,
    sold: 34,
    flashSale: true,
    timeLeft: "05:12:18"
  },
  {
    id: 8,
    name: "Máy hâm sữa Avent Fast 3-in-1",
    originalPrice: 1200000,
    salePrice: 840000,
    discount: 30,
    rating: 4.6,
    reviewCount: 87,
    image: "/images/products/avent-warmer.jpg",
    category: "Máy hâm",
    isHot: false,
    inStock: true,
    sold: 67,
    flashSale: false
  }
];

export default function PromotionProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const totalSlides = Math.ceil(promotionProducts.length / itemsPerSlide.desktop);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay, totalSlides]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarSolidIcon key={i} className="w-4 h-4 text-warning-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <StarIcon className="w-4 h-4 text-gray-300 absolute" />
            <div className="overflow-hidden w-1/2">
              <StarSolidIcon className="w-4 h-4 text-warning-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <StarIcon key={i} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/30 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FireIcon className="w-8 h-8 text-red-500 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Sản phẩm khuyến mãi
            </h2>
            <FireIcon className="w-8 h-8 text-red-500 animate-bounce" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cơ hội vàng sở hữu các sản phẩm chất lượng cao với mức giá ưu đãi nhất
          </p>
          
          {/* Flash Sale Banner */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full mt-6 animate-pulse shadow-lg">
            <TagIcon className="w-5 h-5" />
            <span className="font-bold">FLASH SALE</span>
            <span className="text-sm">Giảm đến 50%</span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Sản phẩm trước"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-primary-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Sản phẩm tiếp theo"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-primary-400" />
          </button>

          {/* Products Grid */}
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                    {promotionProducts
                      .slice(slideIndex * itemsPerSlide.desktop, (slideIndex + 1) * itemsPerSlide.desktop)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="group bg-white rounded-2xl shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
                        >
                          {/* Product Labels */}
                          <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                            {product.discount > 0 && (
                              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                -{product.discount}%
                              </div>
                            )}
                            {product.isHot && (
                              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                                <FireIcon className="w-4 h-4" />
                                <span>HOT</span>
                              </div>
                            )}
                            {product.flashSale && (
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                ⚡ FLASH
                              </div>
                            )}
                          </div>

                          {/* Favorite Button */}
                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                            aria-label={favorites.includes(product.id) ? "Bỏ yêu thích" : "Thêm yêu thích"}
                          >
                            {favorites.includes(product.id) ? (
                              <HeartSolidIcon className="w-5 h-5 text-red-500" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
                            )}
                          </button>

                          {/* Product Image */}
                          <div className="relative overflow-hidden bg-gray-50 aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                                  Hết hàng
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="p-6">
                            {/* Category */}
                            <span className="text-xs text-primary-400 font-medium bg-primary-50 px-2 py-1 rounded-full">
                              {product.category}
                            </span>

                            {/* Product Name */}
                            <h3 className="mt-3 font-semibold text-gray-800 line-clamp-2 group-hover:text-primary-400 transition-colors">
                              {product.name}
                            </h3>

                            {/* Rating & Reviews */}
                            <div className="flex items-center space-x-2 mt-3">
                              <div className="flex items-center space-x-1">
                                {renderStars(product.rating)}
                              </div>
                              <span className="text-sm text-gray-500">
                                {product.rating} ({product.reviewCount})
                              </span>
                            </div>

                            {/* Price */}
                            <div className="mt-4 space-y-1">
                              <div className="flex items-baseline space-x-2">
                                <span className="text-xl font-bold text-red-500">
                                  {formatPrice(product.salePrice)}
                                </span>
                                {product.originalPrice !== product.salePrice && (
                                  <span className="text-sm text-gray-400 line-through">
                                    {formatPrice(product.originalPrice)}
                                  </span>
                                )}
                              </div>
                              {product.flashSale && product.timeLeft && (
                                <div className="text-xs text-red-500 font-medium">
                                  ⏰ Còn lại: {product.timeLeft}
                                </div>
                              )}
                            </div>

                            {/* Sold Count */}
                            <div className="mt-3 text-sm text-gray-500">
                              Đã bán: {product.sold}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex space-x-2">
                              <button 
                                className="flex-1 bg-gradient-primary text-white py-3 px-4 rounded-xl font-medium hover:shadow-primary-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={!product.inStock}
                                aria-label={`Thêm ${product.name} vào giỏ hàng`}
                              >
                                <ShoppingCartIcon className="w-5 h-5 inline mr-2" />
                                {product.inStock ? "Thêm giỏ hàng" : "Hết hàng"}
                              </button>
                              <button 
                                className="p-3 border-2 border-gray-200 text-gray-600 hover:border-primary-400 hover:text-primary-400 rounded-xl transition-all duration-300 hover:scale-105"
                                aria-label={`Xem chi tiết ${product.name}`}
                              >
                                <EyeIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary-400 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/client/san-pham?promotion=true"
            className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-primary hover:shadow-primary-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Xem tất cả sản phẩm khuyến mãi</span>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}