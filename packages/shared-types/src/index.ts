import { z } from 'zod';

// ========================================
// ENUMS
// ========================================

/**
 * Order status enum
 */
export const OrderStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus];

// ========================================
// ZOD SCHEMAS
// ========================================

/**
 * Order status Zod schema
 */
export const OrderStatusSchema = z.enum(['PENDING', 'COMPLETED', 'CANCELLED']);

/**
 * Base Order schema (without id and timestamps)
 */
export const CreateOrderSchema = z.object({
  customer_name: z
    .string()
    .min(1, 'Customer name is required')
    .max(255, 'Customer name must be less than 255 characters'),
  item: z.string().min(1, 'Item is required').max(255, 'Item must be less than 255 characters'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be a positive number'),
  status: OrderStatusSchema,
});

/**
 * Update Order schema (all fields optional)
 */
export const UpdateOrderSchema = CreateOrderSchema.partial();

/**
 * Complete Order schema (with id and timestamps)
 */
export const OrderSchema = CreateOrderSchema.extend({
  id: z.string().uuid('Invalid order ID format'),
  created_at: z.string().datetime(),
});

/**
 * Pagination query parameters schema
 */
export const PaginationSchema = z.object({
  page: z
    .number()
    .int('Page must be an integer')
    .positive('Page must be a positive number')
    .default(1),
  page_size: z
    .number()
    .int('Page size must be an integer')
    .positive('Page size must be a positive number')
    .max(100, 'Page size cannot exceed 100')
    .default(10),
});

/**
 * Filter query parameters schema
 */
export const OrderFilterSchema = z.object({
  status: OrderStatusSchema.optional(),
});

/**
 * Combined query parameters for orders list
 */
export const OrdersQuerySchema = PaginationSchema.merge(OrderFilterSchema);

// ========================================
// TYPESCRIPT TYPES (Inferred from Zod)
// ========================================

export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;
export type UpdateOrderDTO = z.infer<typeof UpdateOrderSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type PaginationParams = z.infer<typeof PaginationSchema>;
export type OrderFilter = z.infer<typeof OrderFilterSchema>;
export type OrdersQuery = z.infer<typeof OrdersQuerySchema>;

// ========================================
// API RESPONSE TYPES
// ========================================

/**
 * Generic paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
  };
}

/**
 * Generic API success response
 */
export interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
}

/**
 * API error response
 */
export interface ApiError {
  success: false;
  error: {
    message: string;
    code: string;
    details?: unknown;
  };
}

/**
 * Type guard to check if response is an error
 */
export const isApiError = (response: unknown): response is ApiError => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'success' in response &&
    response.success === false
  );
};
