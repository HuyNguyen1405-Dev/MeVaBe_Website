import { NextRequest, NextResponse } from 'next/server';

// Mock data - In real app, this would come from a database
const mockProducts = [
  {
    id: '1',
    name: 'Sữa bột Nan Pro 1',
    slug: 'sua-bot-nan-pro-1',
    price: 350000,
    originalPrice: 400000,
    description: 'Sữa bột cho trẻ sơ sinh từ 0-6 tháng tuổi',
    shortDescription: 'Dinh dưỡng hoàn hảo cho bé yêu',
    images: ['/images/products/sua-nan-pro-1.jpg'],
    category: { id: '1', name: 'Sữa bột', slug: 'sua-bot' },
    inStock: true,
    stockQuantity: 100,
    featured: true,
    rating: 4.8,
    reviewCount: 125,
    tags: ['sữa bột', 'trẻ sơ sinh', 'dinh dưỡng'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Tã Pampers Baby Dry',
    slug: 'ta-pampers-baby-dry',
    price: 280000,
    description: 'Tã quần cao cấp cho bé',
    shortDescription: 'Khô thoáng suốt 12 giờ',
    images: ['/images/products/ta-pampers.jpg'],
    category: { id: '2', name: 'Tã bỉm', slug: 'ta-bim' },
    inStock: true,
    stockQuantity: 50,
    featured: false,
    rating: 4.6,
    reviewCount: 89,
    tags: ['tã bỉm', 'pampers', 'khô thoáng'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');

    let filteredProducts = [...mockProducts];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        product => product.category.slug === category
      );
    }

    // Filter by search
    if (search) {
      filteredProducts = filteredProducts.filter(
        product => 
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by featured
    if (featured === 'true') {
      filteredProducts = filteredProducts.filter(product => product.featured);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const response = {
      success: true,
      data: {
        data: paginatedProducts,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredProducts.length / limit),
          totalItems: filteredProducts.length,
          itemsPerPage: limit,
          hasNext: endIndex < filteredProducts.length,
          hasPrev: page > 1,
        }
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Lỗi server',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}