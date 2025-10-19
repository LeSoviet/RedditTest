import { Request, Response, NextFunction } from 'express';
import {
  CreateOrderSchema,
  UpdateOrderSchema,
  OrdersQuerySchema,
  ApiResponse,
  Order,
  PaginatedResponse,
} from '@shared/types';
import prisma from '../config/database';
import { AppError } from '../middleware/errorHandler';

/**
 * GET /api/orders
 * Get paginated list of orders with optional status filter
 */
export const getOrders = async (
  req: Request,
  res: Response<ApiResponse<PaginatedResponse<Order>>>,
  next: NextFunction
) => {
  try {
    // Validate and parse query parameters
    const query = OrdersQuerySchema.parse({
      page: req.query.page ? Number(req.query.page) : 1,
      page_size: req.query.page_size ? Number(req.query.page_size) : 10,
      status: req.query.status,
    });

    const { page, page_size, status } = query;
    const skip = (page - 1) * page_size;

    // Build where clause
    const where = status ? { status } : {};

    // Get total count and orders
    const [total, orders] = await Promise.all([
      prisma.order.count({ where }),
      prisma.order.findMany({
        where,
        skip,
        take: page_size,
        orderBy: { created_at: 'desc' },
      }),
    ]);

    const total_pages = Math.ceil(total / page_size);

    res.json({
      success: true,
      data: {
        data: orders.map((order: any) => ({
          ...order,
          created_at:
            order.created_at instanceof Date ? order.created_at.toISOString() : order.created_at,
        })),
        pagination: {
          page,
          page_size,
          total,
          total_pages,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/orders/:id
 * Get order by ID
 */
export const getOrderById = async (
  req: Request,
  res: Response<ApiResponse<Order>>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const order = await prisma.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new AppError(404, 'Order not found', 'ORDER_NOT_FOUND');
    }

    res.json({
      success: true,
      data: {
        ...order,
        created_at:
          order.created_at instanceof Date ? order.created_at.toISOString() : order.created_at,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/orders
 * Create a new order
 */
export const createOrder = async (
  req: Request,
  res: Response<ApiResponse<Order>>,
  next: NextFunction
) => {
  try {
    // Validate request body
    const validatedData = CreateOrderSchema.parse(req.body);

    const order = await prisma.order.create({
      data: validatedData,
    });

    res.status(201).json({
      success: true,
      data: {
        ...order,
        created_at:
          order.created_at instanceof Date ? order.created_at.toISOString() : order.created_at,
      },
      message: 'Order created successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/orders/:id
 * Update an existing order
 */
export const updateOrder = async (
  req: Request,
  res: Response<ApiResponse<Order>>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Check if order exists
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });

    if (!existingOrder) {
      throw new AppError(404, 'Order not found', 'ORDER_NOT_FOUND');
    }

    // Validate request body
    const validatedData = UpdateOrderSchema.parse(req.body);

    const order = await prisma.order.update({
      where: { id },
      data: validatedData,
    });

    res.json({
      success: true,
      data: {
        ...order,
        created_at:
          order.created_at instanceof Date ? order.created_at.toISOString() : order.created_at,
      },
      message: 'Order updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/orders/:id
 * Delete an order
 */
export const deleteOrder = async (
  req: Request,
  res: Response<ApiResponse<{ id: string }>>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Check if order exists
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });

    if (!existingOrder) {
      throw new AppError(404, 'Order not found', 'ORDER_NOT_FOUND');
    }

    await prisma.order.delete({
      where: { id },
    });

    res.json({
      success: true,
      data: { id },
      message: 'Order deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
