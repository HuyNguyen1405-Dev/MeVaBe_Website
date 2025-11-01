export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

export const SITE_CONFIG = {
  name: 'Mevabe Website',
  description: 'Mevabe ecommerce website',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4000',
  ogImage: '/images/og-image.jpg',
  creator: '@mevabe',
};

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
    REFRESH: '/auth/refresh',
  },
  
  // Products
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: string) => `/products/${id}`,
    CATEGORIES: '/products/categories',
    SEARCH: '/products/search',
    FEATURED: '/products/featured',
  },
  
  // Categories
  CATEGORIES: {
    LIST: '/categories',
    DETAIL: (id: string) => `/categories/${id}`,
    PRODUCTS: (id: string) => `/categories/${id}/products`,
  },
  
  // Blog
  BLOG: {
    LIST: '/blog',
    DETAIL: (id: string) => `/blog/${id}`,
    CATEGORIES: '/blog/categories',
  },
  
  // Contact
  CONTACT: {
    SEND: '/contact',
  },
  
  // Cart
  CART: {
    LIST: '/cart',
    ADD: '/cart/add',
    UPDATE: '/cart/update',
    REMOVE: '/cart/remove',
    CLEAR: '/cart/clear',
  },
  
  // Orders
  ORDERS: {
    LIST: '/orders',
    DETAIL: (id: string) => `/orders/${id}`,
    CREATE: '/orders',
  },
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
};

export const CACHE_KEYS = {
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
  BLOG_POSTS: 'blog-posts',
  USER_PROFILE: 'user-profile',
};