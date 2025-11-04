"use client";
import { useState, useEffect } from "react";
import {
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  CreditCardIcon,
  CheckBadgeIcon,
  HeartIcon,
  ClockIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const commitments = [
  {
    id: 1,
    title: "Hàng chính hãng 100%",
    description: "Cam kết sản phẩm chính hãng, có tem chống giả",
    icon: ShieldCheckIcon,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    features: [
      "Nhập khẩu trực tiếp",
      "Tem chống giả rõ ràng",
      "Giấy tờ đầy đủ",
    ],
    isPopular: true,
  },
  {
    id: 2,
    title: "Đổi trả trong 30 ngày",
    description: "Đổi trả miễn phí nếu sản phẩm có lỗi",
    icon: ArrowPathIcon,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    features: ["Không cần lý do", "Hoàn tiền 100%", "Đổi size miễn phí"],
    isPopular: false,
  },
  {
    id: 3,
    title: "Giao hàng nhanh 2-24h",
    description: "Giao hàng tận nơi, thanh toán khi nhận",
    icon: TruckIcon,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    features: [
      "Giao trong 2h nội thành",
      "Miễn phí từ 500k",
      "Đóng gói cẩn thận",
    ],
    isPopular: true,
  },
  {
    id: 4,
    title: "Hỗ trợ 24/7",
    description: "Tư vấn chuyên nghiệp mọi lúc mọi nơi",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    features: ["Hotline 24/7", "Chat trực tuyến", "Tư vấn chuyên sâu"],
    isPopular: false,
  },
  {
    id: 5,
    title: "Thanh toán an toàn",
    description: "Nhiều hình thức thanh toán tiện lợi",
    icon: CreditCardIcon,
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
    features: ["VNPay, MoMo, ZaloPay", "Chuyển khoản", "COD toàn quốc"],
    isPopular: false,
  },
  {
    id: 6,
    title: "Tích điểm đổi quà",
    description: "Chương trình khách hàng thân thiết",
    icon: GiftIcon,
    color: "bg-gradient-to-br from-red-500 to-red-600",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    features: ["Tích điểm mỗi đơn", "Quà tặng hấp dẫn", "Ưu đãi sinh nhật"],
    isPopular: true,
  },
];

const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Chứng nhận chất lượng quốc tế",
    image: "/images/certifications/iso-9001.png",
    year: "2023",
  },
  {
    id: 2,
    name: "FDA Approved",
    description: "Được FDA Mỹ chứng nhận an toàn",
    image: "/images/certifications/fda.png",
    year: "2023",
  },
  {
    id: 3,
    name: "CE Mark",
    description: "Đạt tiêu chuẩn châu Âu",
    image: "/images/certifications/ce-mark.png",
    year: "2023",
  },
  {
    id: 4,
    name: "Thương hiệu uy tín",
    description: "Top 100 thương hiệu tin cậy",
    image: "/images/certifications/top-brand.png",
    year: "2024",
  },
];

const stats = [
  { id: 1, number: "10,000+", label: "Khách hàng tin tưởng", icon: HeartIcon },
  { id: 2, number: "99.9%", label: "Độ hài lòng", icon: StarIcon },
  { id: 3, number: "24/7", label: "Hỗ trợ không ngừng", icon: ClockIcon },
  { id: 4, number: "2h", label: "Giao hàng nhanh", icon: TruckIcon },
];

export default function CommitmentSection() {
  const [activeCommitment, setActiveCommitment] = useState<number | null>(null);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.querySelector("#stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CheckBadgeIcon className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Cam kết chất lượng
            </h2>
            <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Chúng tôi cam kết mang đến sản phẩm chất lượng cao với dịch vụ tốt
            nhất cho mẹ và bé
          </p>

          {/* Trust Banner */}
          <div className="inline-flex items-center space-x-3 bg-emerald-600 text-white px-8 py-4 rounded-lg shadow-lg">
            <ShieldCheckIcon className="w-6 h-6" />
            <span className="font-semibold text-lg">
              100% UY TÍN - CHẤT LƯỢNG
            </span>
            <CheckBadgeIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={commitment.id}
                className={`group relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer ${
                  activeCommitment === commitment.id
                    ? "border-blue-300 shadow-lg"
                    : ""
                }`}
                onMouseEnter={() => setActiveCommitment(commitment.id)}
                onMouseLeave={() => setActiveCommitment(null)}
              >
                {/* Popular Badge */}
                {commitment.isPopular && (
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                    PHỔ BIẾN
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`relative mb-4 ${commitment.bgColor} w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200`}
                >
                  <IconComponent
                    className={`w-8 h-8 ${commitment.iconColor} group-hover:text-blue-600`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {commitment.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {commitment.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <CheckBadgeIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Chứng nhận chất lượng
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group text-center hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="bg-gray-50 rounded-lg p-4 mb-4 group-hover:bg-blue-50 transition-colors duration-200">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-16 object-contain mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-sm">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600 mb-1">{cert.description}</p>
                <span className="text-xs text-blue-600 font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div
          id="stats-section"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className={`text-center transform transition-all duration-700 ${
                  visibleStats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 group">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Cần hỗ trợ thêm thông tin?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ
              bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0123456789"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Gọi ngay: 0123.456.789</span>
              </a>
              <a
                href="/client/lien-he"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <MapPinIcon className="w-5 h-5" />
                <span>Tìm cửa hàng gần nhất</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
