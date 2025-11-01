import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "@/config/api";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  ApiResponse,
} from "@/types";

class AuthService {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    if (response.success && response.data) {
      this.setAuthToken(response.data.token);
      return response.data;
    }

    throw new Error(response.message || "Đăng nhập thất bại");
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.REGISTER,
      userData
    );

    if (response.success && response.data) {
      this.setAuthToken(response.data.token);
      return response.data;
    }

    throw new Error(response.message || "Đăng ký thất bại");
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      // Continue with logout even if API call fails
      console.error("Logout API error:", error);
    } finally {
      this.removeAuthToken();
    }
  }

  async getProfile(): Promise<{ user: User }> {
    const response = await apiClient.get<ApiResponse<{ user: User }>>(
      API_ENDPOINTS.AUTH.PROFILE
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Không thể lấy thông tin người dùng");
  }

  async refreshToken(): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.REFRESH
    );

    if (response.success && response.data) {
      this.setAuthToken(response.data.token);
      return response.data;
    }

    throw new Error(response.message || "Làm mới token thất bại");
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await apiClient.put<ApiResponse<User>>(
      API_ENDPOINTS.AUTH.PROFILE,
      userData
    );

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.message || "Cập nhật thông tin thất bại");
  }

  async changePassword(data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      "/auth/change-password",
      data
    );

    if (!response.success) {
      throw new Error(response.message || "Đổi mật khẩu thất bại");
    }
  }

  async forgotPassword(email: string): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      "/auth/forgot-password",
      { email }
    );

    if (!response.success) {
      throw new Error(response.message || "Gửi email khôi phục thất bại");
    }
  }

  async resetPassword(data: {
    token: string;
    password: string;
    confirmPassword: string;
  }): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      "/auth/reset-password",
      data
    );

    if (!response.success) {
      throw new Error(response.message || "Đặt lại mật khẩu thất bại");
    }
  }

  // Token management
  private setAuthToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  private removeAuthToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");
    }
  }

  getAuthToken(): string | null {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("auth_token") ||
        sessionStorage.getItem("auth_token")
      );
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}

export const authService = new AuthService();
