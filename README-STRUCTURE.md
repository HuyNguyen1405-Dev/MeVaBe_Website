# Cấu trúc dự án Next.js hoàn chỉnh

## Tổng quan
Dự án đã được bổ sung đầy đủ các thư mục và cấu hình cần thiết cho một ứng dụng Next.js hiện đại với Redux, TypeScript, và các best practices.

## Cấu trúc thư mục

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── api/               # API Routes
│   ├── client/            # Client pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── common/            # Common/shared components
│   ├── home/              # Home page components
│   └── layout/            # Layout components
├── config/                # Configuration files
│   ├── api.ts             # API endpoints & config
│   └── routes.ts          # Route constants
├── hooks/                 # Custom React hooks
│   ├── redux.ts           # Typed Redux hooks
│   ├── useAuth.ts         # Authentication hook
│   ├── useAsync.ts        # Async operations hook
│   ├── useDebounce.ts     # Debounce hooks
│   └── useLocalStorage.ts # Local storage hook
├── lib/                   # Utility libraries
│   ├── axiosClient.ts     # Axios configuration
│   ├── constants.ts       # App constants
│   ├── fetcher.ts         # SWR fetcher
│   └── utils.ts           # Utility functions
├── middleware.ts          # Next.js middleware (auth, etc.)
├── providers/             # React context providers
│   ├── ReduxProvider.tsx  # Redux Provider
│   └── ThemeProvider.tsx  # Theme Provider
├── services/              # API service layers
│   ├── apiClient.ts       # Base API client
│   ├── authService.ts     # Authentication API
│   ├── blogService.ts     # Blog API
│   ├── contactService.ts  # Contact API
│   └── productService.ts  # Product API
├── store/                 # Redux store
│   ├── index.ts           # Store configuration
│   └── slices/            # Redux slices
│       ├── authSlice.ts   # Authentication state
│       ├── blogSlice.ts   # Blog state
│       ├── cartSlice.ts   # Shopping cart state
│       ├── productSlice.ts # Product state
│       └── uiSlice.ts     # UI state
├── types/                 # TypeScript type definitions
│   └── index.ts           # Common types
└── locales/               # Internationalization
```

## Công nghệ sử dụng

- **Next.js 14**: React framework với App Router
- **TypeScript**: Type safety
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client
- **NextAuth.js**: Authentication
- **Jose**: JWT handling

## Tính năng chính

### 1. State Management (Redux)
- **Auth Slice**: Quản lý authentication, user profile
- **Product Slice**: Quản lý sản phẩm, danh mục, tìm kiếm
- **Cart Slice**: Quản lý giỏ hàng
- **Blog Slice**: Quản lý blog posts
- **UI Slice**: Quản lý UI state (modals, notifications, theme)

### 2. API Layer
- **Base API Client**: Axios instance với interceptors
- **Service Classes**: Tách biệt API calls theo domain
- **Type Safety**: Full TypeScript support
- **Error Handling**: Centralized error handling

### 3. Authentication & Authorization
- **JWT Token Management**: Automatic token handling
- **Route Protection**: Middleware-based route protection
- **Role-based Access**: Admin/User role separation

### 4. Custom Hooks
- **useAuth**: Authentication state & methods
- **useAsync**: Async operations with loading states
- **useDebounce**: Debounced values & callbacks
- **useLocalStorage**: Persistent local storage

### 5. Utilities
- **Format Functions**: Currency, date, number formatting
- **Validation**: Email, phone validation
- **SEO Helpers**: Slug generation, meta handling
- **Performance**: Debounce, throttle functions

## Cách sử dụng

### 1. Environment Setup
Sao chép `.env.example` thành `.env.local` và điền các giá trị:

```bash
cp .env.example .env.local
```

### 2. Redux Usage
```tsx
// Trong component
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/store/slices/productSlice';

function ProductList() {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? 'Loading...' : products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### 3. API Service Usage
```tsx
import { productService } from '@/services/productService';
import { useAsync } from '@/hooks/useAsync';

function ProductDetail({ id }: { id: string }) {
  const { data: product, isLoading, error } = useAsync(
    () => productService.getProductById(id),
    { showErrorNotification: true }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{product?.name}</div>;
}
```

### 4. Authentication
```tsx
import { useAuth } from '@/hooks/useAuth';
import { loginUser } from '@/store/slices/authSlice';

function LoginForm() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAuth();

  const handleLogin = async (credentials: LoginRequest) => {
    await dispatch(loginUser(credentials));
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      {/* Form fields */}
    </form>
  );
}
```

## API Routes mẫu

Dự án đã bao gồm các API route mẫu:
- `GET /api/products` - Lấy danh sách sản phẩm với filter, pagination
- Có thể mở rộng thêm các routes khác

## Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

## Mở rộng

### Thêm slice mới
```tsx
// src/store/slices/newSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const newSlice = createSlice({
  name: 'newFeature',
  initialState: {},
  reducers: {},
});

// Thêm vào store/index.ts
```

### Thêm service mới
```tsx
// src/services/newService.ts
class NewService {
  async getData() {
    return await apiClient.get('/endpoint');
  }
}

export const newService = new NewService();
```

### Thêm hook mới
```tsx
// src/hooks/useNewFeature.ts
export function useNewFeature() {
  // Custom logic
  return {};
}
```

## Best Practices

1. **Typing**: Luôn sử dụng TypeScript types
2. **Error Handling**: Sử dụng try-catch và error boundaries
3. **Performance**: Sử dụng React.memo, useMemo, useCallback khi cần
4. **SEO**: Sử dụng Next.js metadata API
5. **Security**: Validate input, sanitize data
6. **Testing**: Viết tests cho components và functions quan trọng

Cấu trúc này cung cấp một foundation mạnh mẽ và scalable cho ứng dụng Next.js của bạn!