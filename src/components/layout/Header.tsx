"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SearchModal from "./SearchModal";
import FloatingChat from "./FloatingChat";
import CategoryMenu from "./CategoryMenu";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      {/* Top Bar */}
      <div className="bg-gradient-cool border-b border-primary-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-4">
              <div
                className="flex items-center space-x-1 group cursor-pointer"
                title="Gọi ngay để được tư vấn miễn phí"
              >
                <PhoneIcon className="w-4 h-4 text-primary-400 group-hover:animate-pulse" />
                <span className="group-hover:text-primary-400 transition-colors">
                  Hotline: 0123.456.789
                </span>
              </div>
              <div
                className="flex items-center space-x-1 group cursor-pointer"
                title="Gửi email để được hỗ trợ"
              >
                <span className="group-hover:text-primary-400 transition-colors">
                  📧 Email: contact@mevabe.com
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-primary-400 font-medium">
              <span className="flex items-center space-x-1">
                <span>🚚</span>
                <span>Miễn phí vận chuyển đơn từ 500K</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>🛡️</span>
                <span>Bảo hành 12 tháng</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                title="Shop Mẹ và Bé - Trang chủ"
                aria-label="Shop Mẹ và Bé - Về trang chủ"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary group-hover:shadow-primary-lg transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-xl">M&B</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-warm rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Mẹ & Bé
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Shop chất lượng cao
                  </p>
                </div>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-8"
              role="navigation"
              aria-label="Menu chính"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-400 font-medium transition-colors duration-200 relative group"
                  title={item.title}
                  aria-label={item.title}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm cho mẹ và bé..."
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 search-input cursor-pointer hover:shadow-md"
                  aria-label="Tìm kiếm sản phẩm"
                  onClick={() => setIsSearchModalOpen(true)}
                  readOnly
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Tìm kiếm"
                  title="Tìm kiếm sản phẩm"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </div>{" "}
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-primary-400 transition-all duration-200 hover:bg-primary-50 rounded-full group"
                onClick={() => setIsSearchModalOpen(true)}
                aria-label="Tìm kiếm"
                title="Tìm kiếm sản phẩm"
              >
                <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Wishlist */}
              <Link
                href="/client/yeu-thich"
                className="hidden sm:flex p-2 text-gray-600 hover:text-primary-400 transition-all duration-200 relative hover:bg-primary-50 rounded-full group"
                title="Sản phẩm yêu thích - Lưu những món đồ bạn thích"
                aria-label="Xem danh sách yêu thích"
              >
                <HeartIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-primary">
                  0
                </span>
              </Link>

              {/* Account */}
              <Link
                href="/tai-khoan"
                className="hidden sm:flex p-2 text-gray-600 hover:text-primary-400 transition-all duration-200 hover:bg-primary-50 rounded-full group"
                title="Tài khoản của tôi - Đăng nhập để nhận ưu đãi"
                aria-label="Đăng nhập / Đăng ký"
              >
                <UserIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>

              {/* Cart */}
              <Link
                href="/gio-hang"
                className="p-2 text-gray-600 hover:text-primary-400 transition-all duration-200 relative hover:bg-primary-50 rounded-full group"
                title="Giỏ hàng - Xem các sản phẩm đã chọn"
                aria-label="Xem giỏ hàng"
              >
                <ShoppingCartIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-primary animate-pulse">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="lg:hidden bg-white border-t border-gray-200"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-400 font-medium py-2 transition-colors duration-200 hover:bg-primary-50 rounded-lg px-3"
                    title={item.title}
                    aria-label={item.title}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                <Link
                  href="/yeu-thich"
                  className="block text-gray-700 hover:text-primary-400 font-medium py-2 transition-colors duration-200 hover:bg-primary-50 rounded-lg px-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  💝 Yêu thích
                </Link>
                <Link
                  href="/tai-khoan"
                  className="block text-gray-700 hover:text-primary-400 font-medium py-2 transition-colors duration-200 hover:bg-primary-50 rounded-lg px-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  👤 Tài khoản
                </Link>
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

      {/* Floating Chat */}
      <FloatingChat />
    </>
  );
}
