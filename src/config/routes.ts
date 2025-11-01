export const ROUTES = {
  HOME: '/',
  
  // Client routes
  CLIENT: {
    HOME: '/client',
    PRODUCTS: '/client/san-pham',
    PRODUCT_DETAIL: (id: string) => `/client/san-pham/${id}`,
    BLOG: '/client/tin-tuc',
    BLOG_DETAIL: (id: string) => `/client/tin-tuc/${id}`,
    CONTACT: '/client/lien-he',
    CART: '/client/gio-hang',
    CHECKOUT: '/client/thanh-toan',
    PROFILE: '/client/tai-khoan',
    ORDERS: '/client/don-hang',
    ORDER_DETAIL: (id: string) => `/client/don-hang/${id}`,
  },
  
  // Admin routes (if needed)
  ADMIN: {
    DASHBOARD: '/admin',
    PRODUCTS: '/admin/products',
    CATEGORIES: '/admin/categories',
    BLOG: '/admin/blog',
    ORDERS: '/admin/orders',
    USERS: '/admin/users',
  },
  
  // Auth routes
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
};

export const EXTERNAL_LINKS = {
  FACEBOOK: 'https://facebook.com/mevabe',
  INSTAGRAM: 'https://instagram.com/mevabe',
  YOUTUBE: 'https://youtube.com/mevabe',
  ZALO: 'https://zalo.me/mevabe',
};