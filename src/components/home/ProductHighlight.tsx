const products = [
  { id: 1, name: "Sữa bột Friso Gold 3", price: "450.000₫", image: "/images/product1.svg" },
  { id: 2, name: "Tã Pampers Size M", price: "290.000₫", image: "/images/product2.svg" },
  { id: 3, name: "Xe tập đi cho bé", price: "850.000₫", image: "/images/product3.svg" },
];

export default function ProductHighlight() {
  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Sản phẩm nổi bật</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="w-full h-56 object-contain rounded-lg" />
              <p className="mt-3 text-lg font-semibold text-gray-800">{p.name}</p>
              <p className="text-pink-500 font-bold mt-1">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
