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
  TagIcon,
  SparklesIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarSolidIcon,
} from "@heroicons/react/24/solid";
import "./promotion-products-styles.css";

const promotionProducts = [
  {
    id: 1,
    name: "Sữa bột Friso Gold 3 cho bé từ 1-2 tuổi - 1.5kg",
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
    timeLeft: "02:45:30",
    altText:
      "Sữa bột Friso Gold 3 cho trẻ em - Sản phẩm khuyến mãi tại shop mẹ và bé MeVaBe",
    seoKeywords: [
      "sữa bột trẻ em",
      "friso gold",
      "shop mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 2,
    name: "Tã Pampers Premium Care Size M (6-10kg) - 54 miếng",
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
    flashSale: false,
    altText:
      "Tã Pampers Premium Care cho bé - Mua sắm mẹ và bé ưu đãi tại MeVaBe",
    seoKeywords: [
      "tã pampers",
      "tã bỉm trẻ em",
      "mua sắm mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 3,
    name: "Xe đẩy Joie Litetrax 4 cao cấp - An toàn cho bé",
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
    flashSale: false,
    altText: "Xe đẩy Joie Litetrax 4 cho bé - Shop mẹ và bé uy tín MeVaBe",
    seoKeywords: [
      "xe đẩy em bé",
      "joie litetrax",
      "shop mẹ và bé",
      "đồ dùng trẻ em",
    ],
  },
  {
    id: 4,
    name: "Bình sữa Pigeon PP Plus 240ml chống sặc cho bé",
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
    timeLeft: "01:23:45",
    altText: "Bình sữa Pigeon cho trẻ em - Sản phẩm khuyến mãi shop mẹ và bé",
    seoKeywords: [
      "bình sữa pigeon",
      "đồ dùng cho bé",
      "mua sắm mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 5,
    name: "Đồ chơi Fisher-Price Rock & Stack phát triển trí tuệ",
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
    flashSale: false,
    altText:
      "Đồ chơi Fisher Price cho trẻ em - Shop mẹ và bé chính hãng MeVaBe",
    seoKeywords: [
      "đồ chơi fisher price",
      "đồ chơi trẻ em",
      "shop mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 6,
    name: "Sữa tắm Johnson's Baby 500ml dịu nhẹ cho da bé",
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
    flashSale: false,
    altText: "Sữa tắm Johnson's Baby - Sản phẩm chăm sóc bé tại shop mẹ và bé",
    seoKeywords: [
      "sữa tắm johnson",
      "chăm sóc trẻ em",
      "mua sắm mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 7,
    name: "Ghế ăn dặm Chicco Polly Easy 4 bánh xe",
    originalPrice: 2800000,
    salePrice: 1960000,
    discount: 30,
    rating: 4.7,
    reviewCount: 45,
    image: "/images/products/chicco-chair.jpg",
    category: "Ghế ăn dặm",
    isHot: false,
    inStock: true,
    sold: 34,
    flashSale: true,
    timeLeft: "05:12:18",
    altText: "Ghế ăn dặm Chicco Polly Easy - Shop mẹ và bé uy tín MeVaBe",
    seoKeywords: [
      "ghế ăn dặm chicco",
      "đồ dùng ăn dặm",
      "shop mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
  {
    id: 8,
    name: "Máy hâm sữa Avent Fast 3-in-1 tiện lợi",
    originalPrice: 1200000,
    salePrice: 840000,
    discount: 30,
    rating: 4.6,
    reviewCount: 87,
    image: "/images/products/avent-warmer.jpg",
    category: "Máy hâm sữa",
    isHot: false,
    inStock: true,
    sold: 67,
    flashSale: false,
    altText: "Máy hâm sữa Avent cho bé - Sản phẩm khuyến mãi tại shop mẹ và bé",
    seoKeywords: [
      "máy hâm sữa avent",
      "đồ dùng cho bé",
      "mua sắm mẹ và bé",
      "sản phẩm khuyến mãi",
    ],
  },
];

export default function PromotionProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive grid configuration
  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const totalSlides = Math.ceil(
    promotionProducts.length / itemsPerSlide.desktop
  );

  // Auto-play slider với smooth transition
  useEffect(() => {
    if (!isAutoPlay) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Tăng thời gian để người dùng có thể xem kỹ hơn

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, totalSlides]);

  // Format giá tiền theo VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Toggle yêu thích sản phẩm
  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Navigation với pause auto-play
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
    // Tự động bật lại auto-play sau 10 giây
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
    // Tự động bật lại auto-play sau 10 giây
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = (product: (typeof promotionProducts)[0]) => {
    if (!product.inStock) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // TODO: Integrate with cart service
      console.log(`Đã thêm ${product.name} vào giỏ hàng`);
    }, 1000);
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
        stars.push(<StarIcon key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="promotion-products-heading"
    >
      {/* Background Decorations - Minimalist 2025 Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric shapes với tone màu #0ba6df */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-[#0ba6df]/5 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-[#0ba6df]/8 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-[#0ba6df]/6 rounded-full animate-pulse delay-1000"></div>

        {/* Subtle background gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0ba6df]/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined Header Section - Minimalist Design */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Main Title với tone màu thương hiệu */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <SparklesIcon className="w-6 h-6 lg:w-8 lg:h-8 text-[#0ba6df] animate-pulse" />
            <h2
              id="promotion-products-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
            >
              Sản phẩm <span className="text-[#0ba6df]">khuyến mãi</span>
            </h2>
            <SparklesIcon className="w-6 h-6 lg:w-8 lg:h-8 text-[#0ba6df] animate-pulse delay-300" />
          </div>

          {/* Subtitle tinh tế */}
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Cơ hội sở hữu các sản phẩm chất lượng cao dành cho mẹ và bé với mức giá ưu đãi nhất
          </p>

          {/* Flash Sale Banner - Thiết kế tối giản */}
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#0ba6df] to-blue-500 text-white px-8 py-4 rounded-2xl mt-8 shadow-lg transform hover:scale-105 transition-all duration-300">
            <BoltIcon className="w-5 h-5" />
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3">
              <span className="font-bold text-base">FLASH SALE</span>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Giảm đến 50%
              </span>
            </div>
            <ClockIcon className="w-5 h-5" />
          </div>

          {/* Trust indicators với màu sắc nhẹ nhàng */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Chính hãng 100%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0ba6df] rounded-full"></div>
              <span>Miễn phí giao hàng</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Đổi trả 30 ngày</span>
            </div>
          </div>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative group">
          {/* Navigation Buttons với thiết kế tối giản */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group-hover:opacity-100 opacity-70 hover:bg-white"
            aria-label="Xem sản phẩm khuyến mãi trước đó"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group-hover:opacity-100 opacity-70 hover:bg-white"
            aria-label="Xem sản phẩm khuyến mãi tiếp theo"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Refined Products Grid */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-lg border border-gray-100"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-2">
                    {promotionProducts
                      .slice(
                        slideIndex * itemsPerSlide.desktop,
                        (slideIndex + 1) * itemsPerSlide.desktop
                      )
                      .map((product, index) => (
                        <article
                          key={product.id}
                          className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative ${
                            index % 2 === 0 ? "delay-150" : "delay-300"
                          }`}
                          itemScope
                          itemType="https://schema.org/Product"
                        >
                          {/* Refined Product Labels với tone màu thương hiệu */}
                          <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
                            {product.discount > 0 && (
                              <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center space-x-1">
                                <TagIcon className="w-3 h-3" />
                                <span>-{product.discount}%</span>
                              </div>
                            )}
                            {product.isHot && (
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center space-x-1 animate-pulse">
                                <FireIcon className="w-3 h-3" />
                                <span>HOT</span>
                              </div>
                            )}
                            {product.flashSale && (
                              <div className="bg-gradient-to-r from-[#0ba6df] to-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center space-x-1">
                                <BoltIcon className="w-3 h-3" />
                                <span>FLASH</span>
                              </div>
                            )}
                          </div>

                          {/* Favorite Button với thiết kế tối giản */}
                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-white"
                            aria-label={
                              favorites.includes(product.id)
                                ? `Bỏ yêu thích ${product.name}`
                                : `Thêm ${product.name} vào yêu thích`
                            }
                          >
                            {favorites.includes(product.id) ? (
                              <HeartSolidIcon className="w-5 h-5 text-red-500" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-400 hover:text-red-400" />
                            )}
                          </button>

                          {/* Product Image với hiệu ứng hover tinh tế */}
                          <div className="relative overflow-hidden bg-gray-50 aspect-square rounded-t-2xl">
                            <img
                              src={product.image}
                              alt={product.altText}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              itemProp="image"
                            />

                            {/* Out of stock overlay với thiết kế sạch sẽ */}
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center">
                                <div className="bg-white/95 text-gray-800 px-6 py-3 rounded-lg text-sm font-semibold shadow-lg">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>Tạm hết hàng</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Hover overlay tinh tế */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="flex space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white">
                                  <EyeIcon className="w-5 h-5 text-gray-600" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Product Info với thiết kế sạch sẽ */}
                          <div className="p-5 space-y-4">
                            {/* Category Badge với tone màu thương hiệu */}
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-[#0ba6df] font-semibold bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                {product.category}
                              </span>
                              {product.flashSale && product.timeLeft && (
                                <div className="flex items-center space-x-1 text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded-full">
                                  <ClockIcon className="w-3 h-3" />
                                  <span>{product.timeLeft}</span>
                                </div>
                              )}
                            </div>

                            {/* Product Name */}
                            <h3
                              className="font-semibold text-gray-800 line-clamp-2 group-hover:text-[#0ba6df] transition-colors duration-300 text-base leading-tight"
                              itemProp="name"
                            >
                              {product.name}
                            </h3>

                            {/* Rating & Reviews */}
                            <div className="flex items-center justify-between">
                              <div
                                className="flex items-center space-x-2"
                                itemProp="aggregateRating"
                                itemScope
                                itemType="https://schema.org/AggregateRating"
                              >
                                <div className="flex items-center space-x-0.5">
                                  {renderStars(product.rating)}
                                </div>
                                <span className="text-sm text-gray-500 font-medium">
                                  <span itemProp="ratingValue">
                                    {product.rating}
                                  </span>
                                  (
                                  <span itemProp="reviewCount">
                                    {product.reviewCount}
                                  </span>
                                  )
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                Đã bán:{" "}
                                <span className="font-semibold text-[#0ba6df]">
                                  {product.sold}
                                </span>
                              </div>
                            </div>

                            {/* Price Display với thiết kế sạch sẽ */}
                            <div
                              className="space-y-2"
                              itemProp="offers"
                              itemScope
                              itemType="https://schema.org/Offer"
                            >
                              <div className="flex items-baseline justify-between">
                                <div className="space-y-1">
                                  <div className="flex items-baseline space-x-2">
                                    <span
                                      className="text-xl font-bold text-red-500"
                                      itemProp="price"
                                    >
                                      {formatPrice(product.salePrice)}
                                    </span>
                                    {product.originalPrice !==
                                      product.salePrice && (
                                      <span className="text-sm text-gray-400 line-through font-medium">
                                        {formatPrice(product.originalPrice)}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-green-600 font-medium">
                                    Tiết kiệm:{" "}
                                    {formatPrice(
                                      product.originalPrice - product.salePrice
                                    )}
                                  </div>
                                </div>
                                {product.discount > 0 && (
                                  <div className="text-right">
                                    <div className="text-xs text-white bg-red-500 px-2 py-1 rounded-full font-bold">
                                      Giảm {product.discount}%
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Action Buttons với thiết kế tinh tế */}
                            <div className="flex space-x-2 pt-2">
                              <button
                                onClick={() => handleAddToCart(product)}
                                disabled={!product.inStock || isLoading}
                                className="flex-1 bg-gradient-to-r from-[#0ba6df] to-blue-500 hover:from-[#0a95c8] hover:to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                                aria-label={`Thêm ${product.name} vào giỏ hàng - Shop mẹ và bé MeVaBe`}
                              >
                                {isLoading ? (
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                  <>
                                    <ShoppingCartIcon className="w-5 h-5" />
                                    <span>
                                      {product.inStock
                                        ? "Thêm giỏ hàng"
                                        : "Hết hàng"}
                                    </span>
                                  </>
                                )}
                              </button>
                              <button
                                className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-all duration-200 hover:shadow-md"
                                aria-label={`Xem chi tiết ${product.name} - Sản phẩm mẹ và bé`}
                              >
                                <EyeIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators với thiết kế tối giản */}
          <div className="flex justify-center items-center space-x-3 mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), 10000);
                }}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0ba6df] focus:ring-offset-2 ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#0ba6df] shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-[#0ba6df]/50 hover:scale-110"
                }`}
                aria-label={`Chuyển đến nhóm sản phẩm ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section với thiết kế tối giản */}
        <div className="text-center mt-16 space-y-6">
          {/* Main CTA Button */}
          <a
            href="/client/san-pham?promotion=true"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0ba6df] to-blue-500 hover:from-[#0a95c8] hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
          >
            <SparklesIcon className="w-6 h-6" />
            <span>Khám phá tất cả sản phẩm khuyến mãi</span>
            <ChevronRightIcon className="w-6 h-6" />
          </a>

          {/* Secondary info với màu sắc nhẹ nhàng */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#0ba6df] rounded-full"></div>
              <span>Hơn 1000+ sản phẩm đang khuyến mãi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cập nhật hàng ngày</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Giảm giá đến 70%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
