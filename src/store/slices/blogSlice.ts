import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { blogService } from '@/services/blogService';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featuredImage: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  published: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

interface BlogState {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
  selectedPost: BlogPost | null;
  categories: BlogCategory[];
  isLoading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

const initialState: BlogState = {
  posts: [],
  featuredPosts: [],
  selectedPost: null,
  categories: [],
  isLoading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  },
};

// Async thunks
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchPosts',
  async (params?: { page?: number; category?: string; limit?: number }) => {
    const response = await blogService.getPosts(params);
    return response;
  }
);

export const fetchFeaturedPosts = createAsyncThunk(
  'blog/fetchFeaturedPosts',
  async () => {
    const response = await blogService.getFeaturedPosts();
    return response;
  }
);

export const fetchBlogPostById = createAsyncThunk(
  'blog/fetchPostById',
  async (id: string) => {
    const response = await blogService.getPostById(id);
    return response;
  }
);

export const fetchBlogCategories = createAsyncThunk(
  'blog/fetchCategories',
  async () => {
    const response = await blogService.getCategories();
    return response;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch blog posts';
      })
      // Fetch featured posts
      .addCase(fetchFeaturedPosts.fulfilled, (state, action) => {
        state.featuredPosts = action.payload;
      })
      // Fetch post by ID
      .addCase(fetchBlogPostById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchBlogPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch blog post';
      })
      // Fetch categories
      .addCase(fetchBlogCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { clearError, clearSelectedPost } = blogSlice.actions;
export default blogSlice.reducer;