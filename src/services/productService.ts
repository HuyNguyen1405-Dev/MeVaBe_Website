import { apiClient } from "./apiClient";
import { API_ENDPOINTS, PAGINATION } from "@/config/api";
import { Product, Category, ApiResponse, PaginationResponse } from "@/types";

export interface ProductFilter {
  category?: string;
  priceRange?: [number, number];
  inStock?: boolean;
  featured?: boolean;
  search?: string;
  sortBy?: "name" | "price" | "rating" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

class ProductService {
  async getProducts(
    filters?: ProductFilter
  ): Promise<PaginationResponse<Product>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(","));
          } else {
            params.append(key, value.toString());
          }
        }
      });
    }

    // Set default pagination
    if (!params.has("limit")) {
      params.append("limit", PAGINATION.DEFAULT_PAGE_SIZE.toString());
    }

    const response = await apiClient.get<
      ApiResponse<PaginationResponse<Product>>
    >(`${API_ENDPOINTS.PRODUCTS.LIST}?${params.toString()}`);

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy danh sách sản phẩm");
  }

  async getProductById(id: string): Promise<Product> {
    const response = await apiClient.get<ApiResponse<Product>>(
      API_ENDPOINTS.PRODUCTS.DETAIL(id)
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy thông tin sản phẩm");
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<Product[]>>(
      API_ENDPOINTS.PRODUCTS.FEATURED
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy sản phẩm nổi bật");
  }

  async searchProducts(
    query: string,
    filters?: Omit<ProductFilter, "search">
  ): Promise<PaginationResponse<Product>> {
    const params = new URLSearchParams({ search: query });

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(","));
          } else {
            params.append(key, value.toString());
          }
        }
      });
    }

    const response = await apiClient.get<
      ApiResponse<PaginationResponse<Product>>
    >(`${API_ENDPOINTS.PRODUCTS.SEARCH}?${params.toString()}`);

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Tìm kiếm sản phẩm thất bại");
  }

  async getProductsByCategory(
    categoryId: string,
    filters?: ProductFilter
  ): Promise<PaginationResponse<Product>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(","));
          } else {
            params.append(key, value.toString());
          }
        }
      });
    }

    const response = await apiClient.get<
      ApiResponse<PaginationResponse<Product>>
    >(`${API_ENDPOINTS.CATEGORIES.PRODUCTS(categoryId)}?${params.toString()}`);

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy sản phẩm theo danh mục");
  }

  async getCategories(): Promise<Category[]> {
    const response = await apiClient.get<ApiResponse<Category[]>>(
      API_ENDPOINTS.PRODUCTS.CATEGORIES
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy danh mục sản phẩm");
  }

  async getCategoryById(id: string): Promise<Category> {
    const response = await apiClient.get<ApiResponse<Category>>(
      API_ENDPOINTS.CATEGORIES.DETAIL(id)
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy thông tin danh mục");
  }

  // Related products
  async getRelatedProducts(productId: string, limit = 4): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<Product[]>>(
      `/products/${productId}/related?limit=${limit}`
    );

    if (response.success && response.data) {
      return response.data;
    }

    return [];
  }

  // Product reviews
  async getProductReviews(productId: string, page = 1, limit = 10) {
    const response = await apiClient.get<ApiResponse<any>>(
      `/products/${productId}/reviews?page=${page}&limit=${limit}`
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy đánh giá sản phẩm");
  }

  async addProductReview(
    productId: string,
    review: {
      rating: number;
      comment: string;
    }
  ) {
    const response = await apiClient.post<ApiResponse<any>>(
      `/products/${productId}/reviews`,
      review
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể thêm đánh giá");
  }
}

export const productService = new ProductService();
