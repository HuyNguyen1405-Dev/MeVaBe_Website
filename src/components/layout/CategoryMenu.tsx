import {
  Baby,
  Milk,
  ToyBrick,
  Heart,
  ShoppingBag,
  Gift,
  Bath,
} from "lucide-react";
import Link from "next/link";

export default function CategoryMenu() {
  const categories = [
    {
      href: "/danh-muc/do-cho-me",
      label: "Đồ cho Mẹ",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      href: "/danh-muc/do-cho-be",
      label: "Đồ cho Bé",
      icon: <Baby className="w-5 h-5" />,
    },
    {
      href: "/danh-muc/do-choi",
      label: "Đồ chơi",
      icon: <ToyBrick className="w-5 h-5" />,
    },
    {
      href: "/danh-muc/sua-bot",
      label: "Sữa bột",
      icon: <Milk className="w-5 h-5" />,
    },
    {
      href: "/danh-muc/ta-bim",
      label: "Tã bỉm",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      href: "/danh-muc/cham-soc-be",
      label: "Chăm sóc bé",
      icon: <Bath className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-gradient-cool border-b border-primary-200 hidden lg:block shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className="flex items-center justify-between py-3"
          role="navigation"
          aria-label="Menu danh mục"
        >
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-400 transition-all duration-200 hover:scale-105 font-medium group px-3 py-2 rounded-lg hover:bg-white hover:shadow-primary"
              title={cat.label}
            >
              <span className="text-primary-400 group-hover:text-primary-500 transition-colors group-hover:scale-110">
                {cat.icon}
              </span>
              <span className="group-hover:font-semibold transition-all">
                {cat.label}
              </span>
            </Link>
          ))}

          <Link
            href="/khuyen-mai"
            className="relative bg-gradient-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-gradient-secondary transition-all duration-300 shadow-primary hover:shadow-primary-lg transform hover:scale-105 flex items-center space-x-2 group overflow-hidden"
            title="Xem tất cả khuyến mãi hot nhất"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Gift className="w-5 h-5 group-hover:animate-pulse relative z-10" />
            <span className="relative z-10">Khuyến mãi hot</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-warning-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-warning-500 rounded-full"></div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
