import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ordersApi } from '../services/orders.service';
import type { CreateOrderDTO, UpdateOrderDTO, OrdersQuery } from '@shared/types';

// Query keys
export const orderKeys = {
  all: ['orders'] as const,
  lists: () => [...orderKeys.all, 'list'] as const,
  list: (filters: Partial<OrdersQuery>) => [...orderKeys.lists(), filters] as const,
  details: () => [...orderKeys.all, 'detail'] as const,
  detail: (id: string) => [...orderKeys.details(), id] as const,
};

// Get paginated orders
export const useOrders = (params: Partial<OrdersQuery> = {}) => {
  return useQuery({
    queryKey: orderKeys.list(params),
    queryFn: () => ordersApi.getOrders(params),
  });
};

// Get single order
export const useOrder = (id: string) => {
  return useQuery({
    queryKey: orderKeys.detail(id),
    queryFn: () => ordersApi.getOrderById(id),
    enabled: !!id,
  });
};

// Create order mutation
export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderDTO) => ordersApi.createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
};

// Update order mutation
export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateOrderDTO }) =>
      ordersApi.updateOrder(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
      queryClient.invalidateQueries({ queryKey: orderKeys.detail(variables.id) });
    },
  });
};

// Delete order mutation
export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ordersApi.deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
    },
  });
};
