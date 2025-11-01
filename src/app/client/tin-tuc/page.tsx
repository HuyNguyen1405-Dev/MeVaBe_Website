import React from 'react';

export default function BlogListPage() {
  const posts = [
    { id: 1, title: 'Cách chăm sóc da cho bé mùa đông' },
    { id: 2, title: '5 món ăn dặm giúp bé tăng cân tự nhiên' },
    { id: 3, title: 'Bí quyết giúp mẹ ngủ ngon sau sinh' },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">Tin tức</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.id} className="bg-white p-4 rounded-lg shadow">
            <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
              <span className="text-gray-400">Hình bài viết</span>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <a href="#" className="text-pink-500 text-sm mt-2 inline-block">Đọc thêm →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
