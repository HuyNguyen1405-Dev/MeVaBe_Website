import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import { 
  ContactMessage,
  NewsletterSubscription,
  ApiResponse 
} from '@/types';

class ContactService {
  async sendMessage(message: ContactMessage): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      API_ENDPOINTS.CONTACT.SEND,
      message
    );
    
    if (!response.success) {
      throw new Error(response.message || 'Gửi tin nhắn thất bại');
    }
  }

  async subscribeNewsletter(subscription: NewsletterSubscription): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      '/newsletter/subscribe',
      subscription
    );
    
    if (!response.success) {
      throw new Error(response.message || 'Đăng ký newsletter thất bại');
    }
  }

  async unsubscribeNewsletter(email: string): Promise<void> {
    const response = await apiClient.post<ApiResponse<void>>(
      '/newsletter/unsubscribe',
      { email }
    );
    
    if (!response.success) {
      throw new Error(response.message || 'Hủy đăng ký newsletter thất bại');
    }
  }
}

export const contactService = new ContactService();