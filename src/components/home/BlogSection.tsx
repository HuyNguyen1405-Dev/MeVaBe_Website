const blogs = [
  { id: 1, title: "Cách chăm sóc da cho bé mùa đông", image: "/images/blog1.svg" },
  { id: 2, title: "5 món ăn dặm giúp bé tăng cân tự nhiên", image: "/images/blog2.svg" },
  { id: 3, title: "Bí quyết giúp mẹ ngủ ngon sau sinh", image: "/images/blog3.svg" },
];

export default function BlogSection() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Bài viết mới</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <div key={b.id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="font-semibold text-gray-800">{b.title}</p>
              <a href="#" className="text-pink-500 text-sm mt-2 inline-block hover:underline">Đọc thêm →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
