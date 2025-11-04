"use client";
import { useState, useEffect } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  EyeIcon,
  StarIcon,
  FireIcon,
  TrophyIcon,
  ArrowTrendingUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarSolidIcon,
} from "@heroicons/react/24/solid";

const bestSellingProducts = [
  {
    id: 1,
    name: "Sữa bột Friso Gold 3 - 1.5kg",
    price: 455000,
    originalPrice: 650000,
    rating: 4.8,
    reviewCount: 245,
    image: "/images/products/friso-gold-3.jpg",
    category: "Sữa bột",
    isTopSeller: true,
    rank: 1,
    soldThisMonth: 342,
    inStock: true,
    stockCount: 45,
    trending: true,
    tags: ["Bán chạy #1", "Tin cậy"],
  },
  {
    id: 2,
    name: "Tã Pampers Premium Care Size M",
    price: 224000,
    originalPrice: 320000,
    rating: 4.9,
    reviewCount: 189,
    image: "/images/products/pampers-premium.jpg",
    category: "Tã bỉm",
    isTopSeller: true,
    rank: 2,
    soldThisMonth: 298,
    inStock: true,
    stockCount: 67,
    trending: true,
    tags: ["Chất lượng cao", "Yêu thích"],
  },
  {
    id: 3,
    name: "Bình sữa Pigeon PP Plus 240ml",
    price: 126000,
    originalPrice: 180000,
    rating: 4.6,
    reviewCount: 134,
    image: "/images/products/pigeon-bottle.jpg",
    category: "Bình sữa",
    isTopSeller: false,
    rank: 3,
    soldThisMonth: 187,
    inStock: true,
    stockCount: 23,
    trending: false,
    tags: ["An toàn", "Dễ sử dụng"],
  },
  {
    id: 4,
    name: "Sữa tắm Johnson's Baby 500ml",
    price: 66500,
    originalPrice: 95000,
    rating: 4.5,
    reviewCount: 203,
    image: "/images/products/johnsons-bath.jpg",
    category: "Chăm sóc",
    isTopSeller: false,
    rank: 4,
    soldThisMonth: 234,
    inStock: true,
    stockCount: 89,
    trending: false,
    tags: ["Dịu nhẹ", "Thơm tho"],
  },
  {
    id: 5,
    name: "Đồ chơi Fisher-Price Rock & Stack",
    price: 315000,
    originalPrice: 450000,
    rating: 4.8,
    reviewCount: 98,
    image: "/images/products/fisher-price-stack.jpg",
    category: "Đồ chơi",
    isTopSeller: false,
    rank: 5,
    soldThisMonth: 156,
    inStock: true,
    stockCount: 34,
    trending: true,
    tags: ["Giáo dục", "Vui nhộn"],
  },
  {
    id: 6,
    name: "Máy hâm sữa Avent Fast 3-in-1",
    price: 840000,
    originalPrice: 1200000,
    rating: 4.6,
    reviewCount: 87,
    image: "/images/products/avent-warmer.jpg",
    category: "Máy hâm",
    isTopSeller: false,
    rank: 6,
    soldThisMonth: 67,
    inStock: true,
    stockCount: 12,
    trending: false,
    tags: ["Tiện lợi", "Nhanh chóng"],
  },
  {
    id: 7,
    name: "Ghế ăn dặm Chicco Polly Easy",
    price: 1960000,
    originalPrice: 2800000,
    rating: 4.7,
    reviewCount: 45,
    image: "/images/products/chicco-chair.jpg",
    category: "Ghế ăn",
    isTopSeller: false,
    rank: 7,
    soldThisMonth: 34,
    inStock: true,
    stockCount: 8,
    trending: false,
    tags: ["Cao cấp", "Bền bỉ"],
  },
  {
    id: 8,
    name: "Xe đẩy Joie Litetrax 4",
    price: 2940000,
    originalPrice: 4200000,
    rating: 4.7,
    reviewCount: 67,
    image: "/images/products/joie-litetrax.jpg",
    category: "Xe đẩy",
    isTopSeller: false,
    rank: 8,
    soldThisMonth: 23,
    inStock: true,
    stockCount: 5,
    trending: true,
    tags: ["Sang trọng", "An toàn"],
  },
  {
    id: 9,
    name: "Tã Huggies Dry Size L",
    price: 289000,
    originalPrice: 350000,
    rating: 4.4,
    reviewCount: 167,
    image: "/images/products/huggies-dry.jpg",
    category: "Tã bỉm",
    isTopSeller: false,
    rank: 9,
    soldThisMonth: 145,
    inStock: true,
    stockCount: 56,
    trending: false,
    tags: ["Khô thoáng", "Thoải mái"],
  },
];

export default function BestSellingProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Tất cả", icon: "🏆" },
    { id: "Sữa bột", name: "Sữa bột", icon: "🍼" },
    { id: "Tã bỉm", name: "Tã bỉm", icon: "👶" },
    { id: "Bình sữa", name: "Bình sữa", icon: "🍼" },
    { id: "Đồ chơi", name: "Đồ chơi", icon: "🧸" },
    { id: "Chăm sóc", name: "Chăm sóc", icon: "🧴" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? bestSellingProducts
      : bestSellingProducts.filter(
          (product) => product.category === selectedCategory
        );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
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

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "from-gray-400 to-gray-600 text-white";
      case 3:
        return "from-orange-400 to-orange-600 text-white";
      default:
        return "from-blue-400 to-blue-600 text-white";
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrophyIcon className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sản phẩm bán chạy
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những sản phẩm được mẹ bỉm sữa tin tưởng và lựa chọn nhiều nhất
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Rank Badge */}
              <div
                className={`absolute top-3 left-3 z-10 w-8 h-8 bg-gradient-to-br ${getRankBadgeColor(
                  product.rank
                )} rounded-lg flex items-center justify-center shadow-md font-bold text-sm`}
              >
                {product.rank}
              </div>

              {/* Product Labels */}
              <div className="absolute top-3 right-3 z-10 flex flex-col space-y-1">
                {product.isTopSeller && (
                  <div className="bg-red-600 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm flex items-center space-x-1">
                    <FireIcon className="w-3 h-3" />
                    <span>TOP</span>
                  </div>
                )}
                {product.trending && (
                  <div className="bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm flex items-center space-x-1">
                    <ArrowTrendingUpIcon className="w-3 h-3" />
                    <span>TREND</span>
                  </div>
                )}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-12 right-3 z-10 p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                aria-label={
                  favorites.includes(product.id)
                    ? "Bỏ yêu thích"
                    : "Thêm yêu thích"
                }
              >
                {favorites.includes(product.id) ? (
                  <HeartSolidIcon className="w-4 h-4 text-red-500" />
                ) : (
                  <HeartIcon className="w-4 h-4 text-gray-400 hover:text-red-500" />
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
                {product.stockCount < 10 && (
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Chỉ còn {product.stockCount} sản phẩm
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category & Tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary-400 font-medium bg-primary-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-primary-400 transition-colors mb-3">
                  {product.name}
                </h3>

                {/* Rating & Sales */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="text-sm text-success-600 font-medium">
                    Bán {product.soldThisMonth}/tháng
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-red-500">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice !== product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice !== product.price && (
                    <div className="text-xs text-green-600 font-medium">
                      Tiết kiệm{" "}
                      {formatPrice(product.originalPrice - product.price)}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                    aria-label={`Thêm ${product.name} vào giỏ hàng`}
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Thêm giỏ hàng</span>
                  </button>
                  <button
                    className="p-3 border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all duration-200"
                    aria-label={`Xem chi tiết ${product.name}`}
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/client/san-pham?sort=bestseller"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <TrophyIcon className="w-5 h-5" />
            <span>Xem tất cả sản phẩm bán chạy</span>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Sales Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
            <div className="text-gray-600 text-sm">Sản phẩm bán ra/tháng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Khách hàng hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-gray-600 text-sm">Đánh giá trung bình</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-600 text-sm">Khách hàng quay lại</div>
          </div>
        </div>
      </div>
    </section>
  );
}
