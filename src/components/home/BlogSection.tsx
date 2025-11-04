"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  UserIcon,
  EyeIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const blogs = [
  {
    id: 1,
    title: "10 Cách chăm sóc da bé mùa đông an toàn và hiệu quả",
    excerpt:
      "Mùa đông khô hanh có thể làm da bé bị khô, nứt nẻ. Tìm hiểu cách bảo vệ làn da mỏng manh của bé với những tips chăm sóc chuyên nghiệp...",
    image: "/images/blog/baby-skincare-winter.jpg",
    author: "BS. Nguyễn Minh Hạnh",
    publishDate: "2024-01-15",
    readTime: "5 phút đọc",
    views: 1240,
    category: "Chăm sóc bé",
    tags: ["Chăm sóc da", "Mùa đông", "An toàn"],
    href: "/client/tin-tuc/cham-soc-da-be-mua-dong",
    isHot: true,
    seoKeywords: "chăm sóc da bé mùa đông, da bé bị khô, kem dưỡng ẩm cho bé",
  },
  {
    id: 2,
    title: "5 món ăn dặm giúp bé tăng cân khỏe mạnh và phát triển toàn diện",
    excerpt:
      "Bé biếng ăn, chậm tăng cân khiến mẹ lo lắng? Khám phá 5 công thức ăn dặm dinh dưỡng giúp bé ăn ngon miệng và phát triển khỏe mạnh...",
    image: "/images/blog/baby-food-weight-gain.jpg",
    author: "Dinh dưỡng viên Lê Thị Mai",
    publishDate: "2024-01-10",
    readTime: "7 phút đọc",
    views: 2180,
    category: "Dinh dưỡng",
    tags: ["Ăn dặm", "Tăng cân", "Dinh dưỡng"],
    href: "/client/tin-tuc/5-mon-an-dam-tang-can",
    isHot: true,
    seoKeywords: "ăn dặm cho bé, món ăn dặm tăng cân, thực đơn ăn dặm",
  },
  {
    id: 3,
    title:
      "Bí quyết giúp mẹ bầu và mẹ sau sinh ngủ ngon, khôi phục sức khỏe nhanh chóng",
    excerpt:
      "Thiếu ngủ là vấn đề phổ biến của mẹ bầu và mẹ sau sinh. Tìm hiểu những phương pháp khoa học giúp mẹ có giấc ngủ chất lượng...",
    image: "/images/blog/mom-sleep-tips.jpg",
    author: "BS. Trần Thị Hương",
    publishDate: "2024-01-08",
    readTime: "6 phút đọc",
    views: 1560,
    category: "Chăm sóc mẹ",
    tags: ["Mẹ bầu", "Sau sinh", "Giấc ngủ"],
    href: "/client/tin-tuc/me-ngu-ngon-sau-sinh",
    isHot: false,
    seoKeywords: "mẹ bầu mất ngủ, mẹ sau sinh thiếu ngủ, cách ngủ ngon",
  },
];

const categories = [
  { id: "all", name: "Tất cả", count: 45 },
  { id: "cham-soc-be", name: "Chăm sóc bé", count: 18 },
  { id: "dinh-duong", name: "Dinh dưỡng", count: 15 },
  { id: "cham-soc-me", name: "Chăm sóc mẹ", count: 12 },
];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleBlogs, setVisibleBlogs] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(
              entry.target.getAttribute("data-blog-id") || "0"
            );
            setVisibleBlogs((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const blogElements = document.querySelectorAll("[data-blog-id]");
    blogElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <SparklesIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bài viết & Tư vấn
            </h2>
            <HeartIcon className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Kiến thức chuyên nghiệp từ các chuyên gia hàng đầu về chăm sóc mẹ và
            bé
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              data-blog-id={blog.id}
              className={`group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 overflow-hidden relative ${
                visibleBlogs.has(blog.id)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hot Badge */}
              {blog.isHot && (
                <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  🔥 HOT
                </div>
              )}

              {/* Blog Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-md shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>{formatDate(blog.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <EyeIcon className="w-4 h-4" />
                    <span>{blog.views.toLocaleString()}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-2 mb-4">
                  <UserIcon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">
                    {blog.author}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  href={blog.href}
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/client/tin-tuc"
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <SparklesIcon className="w-5 h-5" />
            <span>Xem tất cả bài viết</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận bài viết mới</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nhận những kiến thức chăm sóc mẹ và bé mới nhất từ các chuyên gia
            hàng đầu
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
