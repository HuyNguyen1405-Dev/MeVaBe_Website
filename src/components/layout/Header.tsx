"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useNavigation } from "@/hooks/useNavigation";
import LoadingBar from "@/components/common/LoadingBar";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import SearchModal from "./SearchModal";
import FloatingChat from "./FloatingChat";
import CategoryMenu from "./CategoryMenu";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLoading, progress, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      href: "/",
      label: "Trang chủ",
      title: "Trang chủ - Shop Mẹ và Bé chất lượng cao",
    },
    {
      href: "/client/san-pham",
      label: "Sản phẩm",
      title: "Sản phẩm cho mẹ và bé - Đồ chơi, quần áo, sữa bột",
    },
    {
      href: "/client/tin-tuc",
      label: "Tin tức",
      title: "Tin tức về chăm sóc mẹ và bé",
    },
    {
      href: "/client/lien-he",
      label: "Liên hệ",
      title: "Liên hệ với Shop Mẹ và Bé",
    },
  ];

  return (
    <>
      {/* Top Bar - Enhanced with better UX and SEO */}
      <div className="bg-gradient-to-r from-primary-50 via-white to-primary-50 border-b border-primary-100 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <Link
                href="tel:0123456789"
                className="flex items-center space-x-2 group cursor-pointer hover:bg-primary-50 rounded-full px-3 py-1.5 transition-all duration-300"
                title="Gọi ngay để được tư vấn miễn phí về sản phẩm mẹ và bé"
                aria-label="Số điện thoại hotline: 0123.456.789"
              >
                <PhoneIcon className="w-4 h-4 text-primary-400 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-primary-500 font-medium transition-colors duration-300">
                  Hotline:{" "}
                  <span className="font-semibold text-primary-400">
                    0123.456.789
                  </span>
                </span>
              </Link>

              <Link
                href="mailto:contact@mevabe.com"
                className="flex items-center space-x-2 group cursor-pointer hover:bg-primary-50 rounded-full px-3 py-1.5 transition-all duration-300"
                title="Gửi email để được hỗ trợ tư vấn sản phẩm"
                aria-label="Email liên hệ: contact@mevabe.com"
              >
                <EnvelopeIcon className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-primary-500 font-medium transition-colors duration-300">
                  Email:{" "}
                  <span className="font-semibold text-primary-400">
                    contact@mevabe.com
                  </span>
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <div
                className="flex items-center space-x-2 text-primary-500 font-medium group cursor-pointer hover:bg-primary-50 rounded-full px-3 py-1.5 transition-all duration-300"
                title="Miễn phí vận chuyển toàn quốc cho đơn hàng từ 500.000đ"
              >
                <TruckIcon className="w-5 h-5 text-primary-400 group-hover:animate-bounce" />
                <span className="group-hover:text-primary-600 transition-colors duration-300">
                  Miễn phí ship từ <span className="font-bold">500K</span>
                </span>
              </div>

              <div
                className="flex items-center space-x-2 text-primary-500 font-medium group cursor-pointer hover:bg-primary-50 rounded-full px-3 py-1.5 transition-all duration-300"
                title="Bảo hành chính hãng 12 tháng cho tất cả sản phẩm"
              >
                <ShieldCheckIcon className="w-5 h-5 text-primary-400 group-hover:animate-pulse" />
                <span className="group-hover:text-primary-600 transition-colors duration-300">
                  Bảo hành <span className="font-bold">12 tháng</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Enhanced with modern design */}
      <header
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-500 border-b border-gray-100/50 ${
          scrolled
            ? "shadow-xl shadow-primary-400/10 bg-white/98"
            : "shadow-lg shadow-primary-400/5"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo - Enhanced with better branding */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-3 lg:space-x-4 group"
                title="MeVaBe - Shop Mẹ và Bé chất lượng cao, sản phẩm chính hãng"
                aria-label="MeVaBe - Về trang chủ shop mẹ và bé"
              >
                <div className="relative">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-primary group-hover:shadow-primary-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-white font-black text-xl lg:text-2xl tracking-tight">
                      M&B
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-warning-400 to-accent-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-mint-400 to-success-400 rounded-full animate-bounce delay-300"></div>
                </div>
                <div className="space-y-0.5">
                  <h1 className="text-2xl lg:text-3xl font-black bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    MeVaBe
                  </h1>
                  <p className="text-xs lg:text-sm text-gray-600 font-medium group-hover:text-primary-500 transition-colors duration-300">
                    Shop chất lượng cao
                  </p>
                </div>
              </Link>
            </div>
            {/* Desktop Navigation - Enhanced typography and effects */}
            <nav
              className="hidden xl:flex items-center space-x-10"
              role="navigation"
              aria-label="Menu điều hướng chính"
            >
              {navigationItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => navigateTo(item.href)}
                  className="text-gray-700 hover:text-primary-500 font-semibold text-base lg:text-lg transition-all duration-300 relative group py-2 px-1 nav-link-smooth"
                  title={item.title}
                  aria-label={item.title}
                >
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
            {/* Search Bar - Enhanced with SEO optimized placeholder and design */}
            <div className="hidden lg:flex flex-1 max-w-lg xl:max-w-xl mx-6 xl:mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                <input
                  type="search"
                  placeholder="Tìm kiếm đồ chơi, quần áo, sữa bột cho mẹ và bé..."
                  className="relative w-full pl-5 pr-14 py-3.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-300 search-input cursor-pointer hover:shadow-lg hover:border-primary-300 bg-white/90 backdrop-blur-sm text-base font-medium placeholder:text-gray-500 placeholder:font-normal"
                  aria-label="Tìm kiếm sản phẩm cho mẹ và bé - đồ chơi, quần áo, sữa bột"
                  onClick={() => setIsSearchModalOpen(true)}
                  readOnly
                />
                <button
                  className="btn-icon-sm absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Mở hộp thoại tìm kiếm sản phẩm"
                  title="Tìm kiếm sản phẩm cho mẹ và bé"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Action Buttons - Enhanced with micro-animations and better UX */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Mobile Search */}
              <button
                className="btn-icon lg:hidden"
                onClick={() => setIsSearchModalOpen(true)}
                aria-label="Tìm kiếm sản phẩm"
                title="Tìm kiếm đồ chơi, quần áo, sữa bột cho mẹ và bé"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>

              {/* Wishlist */}
              <Link
                href="/client/yeu-thich"
                className="btn-icon hidden md:flex relative"
                title="Sản phẩm yêu thích - Lưu những món đồ bạn thích nhất"
                aria-label="Xem danh sách sản phẩm yêu thích (0 sản phẩm)"
              >
                <HeartIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-accent animate-pulse">
                  0
                </span>
              </Link>

              {/* Account */}
              <Link
                href="/tai-khoan"
                className="btn-icon hidden md:flex"
                title="Tài khoản của tôi - Đăng nhập để nhận ưu đãi độc quyền"
                aria-label="Đăng nhập hoặc đăng ký tài khoản"
              >
                <UserIcon className="w-6 h-6" />
              </Link>

              {/* Cart */}
              <Link
                href="/gio-hang"
                className="btn-icon relative mr-2"
                title="Giỏ hàng - Xem các sản phẩm đã chọn (0 sản phẩm)"
                aria-label="Xem giỏ hàng (0 sản phẩm)"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-primary-lg animate-bounce">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="btn-icon xl:hidden ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={
                  isMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"
                }
                aria-expanded={isMenuOpen}
                title={isMenuOpen ? "Đóng menu" : "Xem tất cả menu"}
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden pb-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm cho mẹ và bé..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                  aria-label="Tìm kiếm sản phẩm trên mobile"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-600">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation - Enhanced with smooth animations */}
        {isMenuOpen && (
          <div
            className="xl:hidden bg-white/95 backdrop-blur-md border-t border-primary-200 animate-fade-in-up"
            role="navigation"
            aria-label="Menu điều hướng di động"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Mobile Search Bar */}
              <div className="lg:hidden mb-6">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Tìm kiếm sản phẩm cho mẹ và bé..."
                    className="w-full pl-5 pr-14 py-4 border-2 border-primary-200 rounded-2xl focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-300 text-base font-medium"
                    aria-label="Tìm kiếm sản phẩm trên mobile"
                    onClick={() => {
                      setIsSearchModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    readOnly
                  />
                  <button
                    className="btn-icon-sm absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => {
                      setIsSearchModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <nav className="space-y-3">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-500 font-semibold text-lg py-4 px-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent rounded-2xl group"
                    title={item.title}
                    aria-label={item.title}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                      <span className="text-primary-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </Link>
                ))}

                <hr className="border-primary-200 my-6" />

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/client/yeu-thich"
                    className="flex items-center space-x-3 text-gray-700 hover:text-accent-500 font-medium py-4 px-4 transition-all duration-300 hover:bg-accent-50 rounded-2xl group"
                    onClick={() => setIsMenuOpen(false)}
                    title="Danh sách sản phẩm yêu thích"
                  >
                    <HeartIcon className="w-6 h-6 group-hover:animate-pulse" />
                    <span>Yêu thích</span>
                  </Link>

                  <Link
                    href="/tai-khoan"
                    className="flex items-center space-x-3 text-gray-700 hover:text-secondary-500 font-medium py-4 px-4 transition-all duration-300 hover:bg-secondary-50 rounded-2xl group"
                    onClick={() => setIsMenuOpen(false)}
                    title="Tài khoản cá nhân"
                  >
                    <UserIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Tài khoản</span>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-primary-200 space-y-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">
                    Liên hệ hỗ trợ
                  </h3>

                  <Link
                    href="tel:0123456789"
                    className="flex items-center space-x-3 text-primary-500 font-medium hover:bg-primary-50 rounded-2xl p-3 transition-all duration-300"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Hotline: 0123.456.789</span>
                  </Link>

                  <Link
                    href="mailto:contact@mevabe.com"
                    className="flex items-center space-x-3 text-primary-500 font-medium hover:bg-primary-50 rounded-2xl p-3 transition-all duration-300"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>Email: contact@mevabe.com</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Category Menu */}
      <CategoryMenu />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Loading Bar */}
      <LoadingBar isVisible={isLoading} progress={progress} />

      {/* Floating Chat */}
      <FloatingChat />
    </>
  );
}
