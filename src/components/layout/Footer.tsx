"use client";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/client", label: "Trang chủ" },
    { href: "/client/san-pham", label: "Sản phẩm" },
    { href: "/client/tin-tuc", label: "Tin tức" },
    { href: "/client/lien-he", label: "Liên hệ" },
  ];

  const categories = [
    { href: "/client/san-pham?category=sua-bot", label: "Sữa bột" },
    { href: "/client/san-pham?category=ta-bim", label: "Tã bỉm" },
    { href: "/client/san-pham?category=do-choi", label: "Đồ chơi" },
    { href: "/client/san-pham?category=thoi-trang", label: "Thời trang bé" },
    { href: "/client/san-pham?category=cham-soc", label: "Chăm sóc" },
    { href: "/client/san-pham?category=xe-day", label: "Xe đẩy" },
  ];

  const policies = [
    { href: "/chinh-sach/bao-mat", label: "Chính sách bảo mật" },
    { href: "/chinh-sach/doi-tra", label: "Chính sách đổi trả" },
    { href: "/chinh-sach/van-chuyen", label: "Chính sách vận chuyển" },
    { href: "/chinh-sach/bao-hanh", label: "Chính sách bảo hành" },
    { href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
    { href: "/huong-dan/mua-hang", label: "Hướng dẫn mua hàng" },
  ];

  const services = [
    { icon: ShieldCheckIcon, text: "Hàng chính hãng 100%" },
    { icon: TruckIcon, text: "Giao hàng nhanh 2-24h" },
    { icon: HeartIcon, text: "Đổi trả trong 30 ngày" },
    { icon: ChatBubbleLeftRightIcon, text: "Hỗ trợ 24/7" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-400/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary-400/10 to-transparent rounded-full translate-y-36 -translate-x-36"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                  <span className="text-white font-bold text-xl">M&B</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Mẹ & Bé
                  </h2>
                  <p className="text-gray-400 text-sm">Shop chất lượng cao</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Chúng tôi chuyên cung cấp các sản phẩm chất lượng cao cho mẹ và
                bé, cam kết mang đến những sản phẩm an toàn, uy tín với giá cả
                hợp lý.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    123 Nguyễn Văn Cừ, P.Nguyễn Cư Trinh, Q.1, TP.HCM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:0123456789"
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    Hotline: 0123.456.789
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@mevabe.com"
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    contact@mevabe.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Thứ 2 - Chủ nhật: 8:00 - 22:00
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">
                Liên kết nhanh
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-md font-semibold mt-8 mb-4 text-white">
                Danh mục sản phẩm
              </h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.href}>
                    <Link
                      href={category.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full opacity-60 group-hover:opacity-100"></span>
                      <span>{category.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Chính sách</h3>
              <ul className="space-y-3">
                {policies.map((policy) => (
                  <li key={policy.href}>
                    <Link
                      href={policy.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{policy.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Social */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">
                Cam kết dịch vụ
              </h3>
              <div className="space-y-4 mb-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-primary-400/20 rounded-lg flex items-center justify-center group-hover:bg-primary-400/30 transition-colors">
                        <IconComponent className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        {service.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <h4 className="text-md font-semibold mb-4 text-white">
                Kết nối với chúng tôi
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://facebook.com/mevabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social btn-facebook"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://zalo.me/mevabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social btn-zalo"
                >
                  <span>💬</span>
                  <span>Zalo OA</span>
                </a>
                <a
                  href="https://instagram.com/mevabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social btn-instagram"
                >
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com/mevabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social btn-youtube"
                >
                  <span>📹</span>
                  <span>YouTube</span>
                </a>
              </div>

              {/* Map Link */}
              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=123+Nguyễn+Văn+Cừ+Quận+1+TP.HCM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm"
                >
                  <MapPinIcon className="w-4 h-4" />
                  <span>Xem bản đồ</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Đăng ký nhận tin khuyến mãi
            </h3>
            <p className="text-gray-400 text-sm">
              Nhận thông tin ưu đãi và sản phẩm mới nhất qua email
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400"
              />
              <button className="btn-primary rounded-l-none">Đăng ký</button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Shop Mẹ & Bé. Tất cả quyền được bảo lưu.</p>
              <p className="mt-1">
                Thiết kế bởi{" "}
                <span className="text-primary-400">MeVaBe Team</span> ❤️
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Thanh toán:</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                  💳
                </div>
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">
                  💰
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
