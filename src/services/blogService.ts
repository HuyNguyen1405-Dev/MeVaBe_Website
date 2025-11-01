import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import { 
  BlogPost, 
  BlogCategory,
  ApiResponse,
  PaginationResponse 
} from '@/types';

class BlogService {
  async getPosts(params?: { 
    page?: number; 
    category?: string; 
    limit?: number;
    search?: string;
    featured?: boolean;
  }): Promise<PaginationResponse<BlogPost>> {
    const searchParams = new URLSearchParams();
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const response = await apiClient.get<ApiResponse<PaginationResponse<BlogPost>>>(
      `${API_ENDPOINTS.BLOG.LIST}?${searchParams.toString()}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy danh sách bài viết');
  }

  async getPostById(id: string): Promise<BlogPost> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(
      API_ENDPOINTS.BLOG.DETAIL(id)
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy thông tin bài viết');
  }

  async getPostBySlug(slug: string): Promise<BlogPost> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(
      `/blog/slug/${slug}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy thông tin bài viết');
  }

  async getFeaturedPosts(limit = 5): Promise<BlogPost[]> {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>(
      `/blog/featured?limit=${limit}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy bài viết nổi bật');
  }

  async getCategories(): Promise<BlogCategory[]> {
    const response = await apiClient.get<ApiResponse<BlogCategory[]>>(
      API_ENDPOINTS.BLOG.CATEGORIES
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy danh mục bài viết');
  }

  async getPostsByCategory(categoryId: string, params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginationResponse<BlogPost>> {
    const searchParams = new URLSearchParams({ category: categoryId });
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const response = await apiClient.get<ApiResponse<PaginationResponse<BlogPost>>>(
      `${API_ENDPOINTS.BLOG.LIST}?${searchParams.toString()}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Không thể lấy bài viết theo danh mục');
  }

  async searchPosts(query: string, params?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<PaginationResponse<BlogPost>> {
    const searchParams = new URLSearchParams({ search: query });
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const response = await apiClient.get<ApiResponse<PaginationResponse<BlogPost>>>(
      `/blog/search?${searchParams.toString()}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Tìm kiếm bài viết thất bại');
  }

  async getRelatedPosts(postId: string, limit = 4): Promise<BlogPost[]> {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>(
      `/blog/${postId}/related?limit=${limit}`
    );
    
    if (response.success && response.data) {
      return response.data;
    }
    
    return [];
  }

  async incrementViews(postId: string): Promise<void> {
    try {
      await apiClient.post(`/blog/${postId}/views`);
    } catch (error) {
      // Silently fail for view counting
      console.error('Failed to increment views:', error);
    }
  }
}

export const blogService = new BlogService();