import apiClient from '../lib/api';
import type {
  Order,
  CreateOrderDTO,
  UpdateOrderDTO,
  PaginatedResponse,
  ApiResponse,
  OrdersQuery,
} from '@shared/types';

export const ordersApi = {
  // Get paginated orders with optional filtering
  getOrders: async (params: Partial<OrdersQuery> = {}) => {
    const { data } = await apiClient.get<ApiResponse<PaginatedResponse<Order>>>('/orders', {
      params,
    });
    return data.data;
  },

  // Get order by ID
  getOrderById: async (id: string) => {
    const { data } = await apiClient.get<ApiResponse<Order>>(`/orders/${id}`);
    return data.data;
  },

  // Create new order
  createOrder: async (orderData: CreateOrderDTO) => {
    const { data } = await apiClient.post<ApiResponse<Order>>('/orders', orderData);
    return data.data;
  },

  // Update existing order
  updateOrder: async (id: string, orderData: UpdateOrderDTO) => {
    const { data } = await apiClient.put<ApiResponse<Order>>(`/orders/${id}`, orderData);
    return data.data;
  },

  // Delete order
  deleteOrder: async (id: string) => {
    const { data } = await apiClient.delete<ApiResponse<{ id: string }>>(`/orders/${id}`);
    return data.data;
  },
};
