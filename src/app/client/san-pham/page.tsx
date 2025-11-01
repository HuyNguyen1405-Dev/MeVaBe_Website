import React from 'react';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Sữa bột Friso Gold 3', price: '450.000₫' },
    { id: 2, name: 'Tã Pampers Size M', price: '290.000₫' },
    { id: 3, name: 'Xe tập đi cho bé', price: '850.000₫' },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">Sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow">
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-400">Hình sản phẩm</span>
            </div>
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="text-pink-500 font-bold">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
