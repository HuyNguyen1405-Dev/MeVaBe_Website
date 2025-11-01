const categories = [
  { id: 1, name: "Sữa & Dinh dưỡng", image: "/images/cat1.svg" },
  { id: 2, name: "Tã & Bỉm", image: "/images/cat2.svg" },
  { id: 3, name: "Đồ chơi", image: "/images/cat3.svg" },
  { id: 4, name: "Thời trang", image: "/images/cat4.svg" },
];

export default function CategoryList() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Danh mục nổi bật
        </h3>
        <p className="text-gray-600 text-lg">Khám phá các sản phẩm được yêu thích nhất</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group text-center cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative mb-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-cool p-1 shadow-primary group-hover:shadow-primary-lg transition-all duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-700 font-semibold group-hover:text-primary-400 transition-colors duration-300">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
