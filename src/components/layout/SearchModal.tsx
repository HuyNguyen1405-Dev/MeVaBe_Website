"use client";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search results - thay thế bằng API thực tế
  const mockResults = [
    {
      id: 1,
      name: "Sữa bột Enfamil A+ 1",
      category: "Sữa bột",
      price: "450,000đ",
      image: "/images/sua-bot-1.jpg",
    },
    {
      id: 2,
      name: "Tã bỉm Pampers size M",
      category: "Tã bỉm",
      price: "320,000đ",
      image: "/images/ta-bim-1.jpg",
    },
    {
      id: 3,
      name: "Đồ chơi xe hơi cho bé",
      category: "Đồ chơi",
      price: "150,000đ",
      image: "/images/do-choi-1.jpg",
    },
    {
      id: 4,
      name: "Áo sơ mi cho mẹ bầu",
      category: "Đồ cho mẹ",
      price: "280,000đ",
      image: "/images/ao-me-1.jpg",
    },
  ];

  const popularSearches = [
    "Sữa bột cho bé",
    "Tã bỉm newborn",
    "Đồ chơi giáo dục",
    "Quần áo trẻ em",
    "Xe đẩy em bé",
    "Bình sữa",
  ];

  useEffect(() => {
    if (searchQuery.length > 2) {
      setIsSearching(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = mockResults.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearching(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
      setSearchResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-primary-200 px-4 py-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-400" />
              <input
                type="search"
                placeholder="Tìm kiếm đồ chơi, quần áo, sữa bột cho mẹ và bé..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-primary-200 rounded-2xl focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-300 font-medium"
                autoFocus
                aria-label="Tìm kiếm sản phẩm cho mẹ và bé"
              />
            </div>
            <button
              onClick={onClose}
              className="btn-icon"
              aria-label="Đóng hộp thoại tìm kiếm"
              title="Đóng tìm kiếm"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Popular Searches */}
          {!searchQuery && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tìm kiếm phổ biến
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((term, index) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="btn-tertiary"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading */}
          {isSearching && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
              <span className="ml-3 text-gray-600">Đang tìm kiếm...</span>
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Kết quả tìm kiếm ({searchResults.length})
              </h3>
              <div className="space-y-4">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">IMG</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                      <p className="text-lg font-semibold text-pink-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchQuery.length > 2 &&
            searchResults.length === 0 &&
            !isSearching && (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <MagnifyingGlassIcon className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-600">
                  Không có kết quả nào cho "{searchQuery}". Hãy thử từ khóa
                  khác.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
