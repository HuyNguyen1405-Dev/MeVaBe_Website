import {
  Baby,
  Milk,
  ToyBrick,
  Heart,
  ShoppingBag,
  Gift,
  Bath,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function CategoryMenu() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      href: "/danh-muc/do-cho-me",
      label: "Đồ cho Mẹ",
      icon: <Heart className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "shop đồ cho mẹ bầu và sau sinh",
      gradient: "from-pink-100 to-rose-100",
      hoverGradient: "from-pink-200 to-rose-200",
    },
    {
      href: "/danh-muc/do-cho-be",
      label: "Đồ cho Bé",
      icon: <Baby className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "danh mục sản phẩm cho bé yêu",
      gradient: "from-blue-100 to-cyan-100",
      hoverGradient: "from-blue-200 to-cyan-200",
    },
    {
      href: "/danh-muc/do-choi",
      label: "Đồ chơi",
      icon: <ToyBrick className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "đồ chơi thông minh cho bé phát triển",
      gradient: "from-orange-100 to-yellow-100",
      hoverGradient: "from-orange-200 to-yellow-200",
    },
    {
      href: "/danh-muc/sua-bot",
      label: "Sữa bột",
      icon: <Milk className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "sữa bột cao cấp cho mẹ và bé",
      gradient: "from-amber-100 to-orange-100",
      hoverGradient: "from-amber-200 to-orange-200",
    },
    {
      href: "/danh-muc/ta-bim",
      label: "Tã bỉm",
      icon: <ShoppingBag className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "tã bỉm cao cấp cho bé",
      gradient: "from-green-100 to-emerald-100",
      hoverGradient: "from-green-200 to-emerald-200",
    },
    {
      href: "/danh-muc/cham-soc-be",
      label: "Chăm sóc bé",
      icon: <Bath className="w-6 h-6 lg:w-5 lg:h-5" />,
      seoText: "sản phẩm chăm sóc bé an toàn",
      gradient: "from-purple-100 to-indigo-100",
      hoverGradient: "from-purple-200 to-indigo-200",
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => checkScrollButtons();
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", handleResize);
      checkScrollButtons();

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-primary-50/80 via-white to-primary-50/80 border-b border-primary-200/50 shadow-lg backdrop-blur-sm"
      role="navigation"
      aria-label="Menu danh mục sản phẩm shop mẹ và bé"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4">
          <nav className="flex items-center space-x-2 flex-1">
            {categories.map((cat, index) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`
                  category-item category-card flex flex-col items-center space-y-1 
                  text-gray-700 hover:text-primary-600 transition-all duration-300 
                  font-medium group px-4 py-3 rounded-xl hover:bg-gradient-to-br ${cat.hoverGradient}
                  hover:shadow-lg transform-gpu relative overflow-hidden
                  min-w-[100px] text-center
                `}
                title={`${cat.label} - ${cat.seoText}`}
                aria-label={`Xem danh mục ${cat.label}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background glow effect */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${cat.gradient} 
                  opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-xl
                `}
                ></div>

                {/* Icon container */}
                <div
                  className={`
                  relative z-10 p-2 rounded-lg bg-gradient-to-br ${cat.gradient}
                  group-hover:bg-gradient-to-br group-hover:${cat.hoverGradient}
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  shadow-sm group-hover:shadow-md icon-bounce
                `}
                >
                  <span className="text-primary-500 group-hover:text-primary-600 transition-colors">
                    {cat.icon}
                  </span>
                </div>

                {/* Label */}
                <span className="relative z-10 text-sm font-semibold group-hover:font-bold transition-all group-hover:text-primary-700">
                  {cat.label}
                </span>

                {/* Subtle underline animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* Special Promotion CTA */}
          <Link
            href="/khuyen-mai"
            className="btn-primary promotion-float category-glow relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 text-white px-6 py-3 rounded-2xl font-bold hover:from-primary-600 hover:via-primary-700 hover:to-primary-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3 group overflow-hidden ml-4 promotion-pulse hover:animate-none"
            title="Xem tất cả khuyến mãi hot nhất - sản phẩm mẹ và bé giá tốt"
            aria-label="Khuyến mãi đặc biệt cho sản phẩm mẹ và bé"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-warning-400/20 via-transparent to-warning-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

            {/* Sparkle effect */}
            <div className="absolute inset-0">
              <Sparkles className="absolute top-1 right-2 w-3 h-3 text-warning-300 opacity-70 animate-ping" />
              <Sparkles className="absolute bottom-1 left-3 w-2 h-2 text-warning-200 opacity-50 animate-pulse delay-300" />
            </div>

            {/* Icon and text */}
            <Gift className="w-6 h-6 group-hover:animate-bounce relative z-10" />
            <span className="relative z-10 text-lg">Khuyến mãi hot</span>

            {/* Notification dots */}
            <div className="absolute -top-2 -right-2 flex space-x-1">
              <div className="w-3 h-3 bg-warning-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-warning-500 rounded-full absolute top-0 right-0"></div>
            </div>
          </Link>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Cuộn danh mục sang trái"
            >
              <ChevronLeft className="w-5 h-5 text-primary-600" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
              aria-label="Cuộn danh mục sang phải"
            >
              <ChevronRight className="w-5 h-5 text-primary-600" />
            </button>
          )}

          {/* Scrollable categories */}
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-3 px-4 py-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat, index) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`
                  flex flex-col items-center space-y-2 text-gray-700 hover:text-primary-600 
                  transition-all duration-300 hover:scale-105 font-medium group 
                  px-4 py-3 rounded-2xl hover:bg-gradient-to-br ${cat.hoverGradient}
                  hover:shadow-lg transform-gpu relative overflow-hidden
                  min-w-[90px] flex-shrink-0 bg-white/80 backdrop-blur-sm
                `}
                title={`${cat.label} - ${cat.seoText}`}
                aria-label={`Xem danh mục ${cat.label}`}
              >
                <div
                  className={`
                  p-3 rounded-xl bg-gradient-to-br ${cat.gradient}
                  group-hover:bg-gradient-to-br group-hover:${cat.hoverGradient}
                  transition-all duration-300 group-hover:scale-110
                  shadow-sm group-hover:shadow-md
                `}
                >
                  <span className="text-primary-500 group-hover:text-primary-600 transition-colors">
                    {cat.icon}
                  </span>
                </div>

                <span className="text-xs font-semibold group-hover:font-bold transition-all text-center leading-tight">
                  {cat.label}
                </span>
              </Link>
            ))}

            {/* Mobile Promotion CTA */}
            <Link
              href="/khuyen-mai"
              className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-4 rounded-2xl font-bold shadow-lg flex flex-col items-center space-y-2 group overflow-hidden min-w-[90px] flex-shrink-0 animate-pulse hover:animate-none"
              title="Khuyến mãi hot - sản phẩm mẹ và bé giá tốt"
              aria-label="Xem khuyến mãi đặc biệt"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-warning-400/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-3 rounded-xl bg-white/20 group-active:bg-white/30 transition-all">
                <Gift className="w-6 h-6 group-active:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-warning-400 rounded-full animate-ping"></div>
              </div>

              <span className="text-xs font-bold text-center leading-tight">
                Khuyến mãi
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
