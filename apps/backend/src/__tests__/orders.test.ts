import request from 'supertest';
import express from 'express';
import cors from 'cors';
import ordersRoutes from '../routes/orders.routes';
import { errorHandler } from '../middleware/errorHandler';
import { prisma } from './setup';
import { OrderStatus } from '@shared/types';

// Setup app for testing
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/orders', ordersRoutes);
app.use(errorHandler);

describe('Orders API Tests', () => {
  // Lifecycle hooks
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.order.deleteMany({});
    await prisma.$disconnect();
  });

  afterEach(async () => {
    await prisma.order.deleteMany({});
  });

  // Helper to create test order
  const createTestOrder = async (data = {}) => {
    return await prisma.order.create({
      data: {
        customer_name: 'Test Customer',
        item: 'Test Item',
        quantity: 1,
        status: OrderStatus.PENDING,
        ...data,
      },
    });
  };

  describe('GET /api/orders - Pagination', () => {
    it('should return paginated orders with correct metadata', async () => {
      // Create 5 test orders
      for (let i = 1; i <= 5; i++) {
        await createTestOrder({
          customer_name: `Customer ${i}`,
          item: `Item ${i}`,
        });
      }

      const response = await request(app)
        .get('/api/orders')
        .query({ page: 1, page_size: 2 })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.data).toHaveLength(2);
      
      // Verify that pagination works correctly
      const pagination = response.body.data.pagination;
      expect(pagination.page).toBe(1);
      expect(pagination.page_size).toBe(2);
      expect(pagination.total).toBeGreaterThanOrEqual(5); // At least 5 orders
      expect(pagination.total_pages).toBeGreaterThanOrEqual(3); // At least 3 pages
    });

    it('should return empty page when no data exists', async () => {
      const response = await request(app)
        .get('/api/orders')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.data).toHaveLength(0);
      expect(response.body.data.pagination.total).toBe(0);
    });
  });

  describe('POST /api/orders - Create order', () => {
    it('should create a new order with valid data', async () => {
      const newOrder = {
        customer_name: 'John Doe',
        item: 'MacBook Pro',
        quantity: 2,
        status: OrderStatus.PENDING,
      };

      const response = await request(app)
        .post('/api/orders')
        .send(newOrder)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toMatchObject({
        customer_name: newOrder.customer_name,
        item: newOrder.item,
        quantity: newOrder.quantity,
        status: newOrder.status,
      });
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.created_at).toBeDefined();
    });

    it('should reject order with invalid data', async () => {
      const invalidOrder = {
        customer_name: '', // empty
        item: 'Test',
        quantity: -1, // negative
        status: 'INVALID_STATUS', // invalid status
      };

      const response = await request(app)
        .post('/api/orders')
        .send(invalidOrder)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/orders/:id - Get by ID', () => {
    it('should return an existing order', async () => {
      const order = await createTestOrder({
        customer_name: 'Jane Doe',
        item: 'iPhone 15',
      });

      const response = await request(app)
        .get(`/api/orders/${order.id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(order.id);
      expect(response.body.data.customer_name).toBe('Jane Doe');
    });

    it('should return 404 if order does not exist', async () => {
      const fakeId = '123e4567-e89b-12d3-a456-426614174000';

      const response = await request(app)
        .get(`/api/orders/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe('ORDER_NOT_FOUND');
    });

    it('should return 400 with invalid UUID', async () => {
      const response = await request(app)
        .get('/api/orders/invalid-uuid')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/orders?status - Filter by status', () => {
    it('should filter orders by PENDING status', async () => {
      // Create orders with different statuses
      await createTestOrder({ status: OrderStatus.PENDING });
      await createTestOrder({ status: OrderStatus.PENDING });
      await createTestOrder({ status: OrderStatus.COMPLETED });
      await createTestOrder({ status: OrderStatus.CANCELLED });

      const response = await request(app)
        .get('/api/orders')
        .query({ status: OrderStatus.PENDING })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.data).toHaveLength(2);
      expect(response.body.data.pagination.total).toBe(2);
      
      // Verify all orders are PENDING
      response.body.data.data.forEach((order: any) => {
        expect(order.status).toBe(OrderStatus.PENDING);
      });
    });

    it('should filter orders by COMPLETED status', async () => {
      await createTestOrder({ status: OrderStatus.PENDING });
      await createTestOrder({ status: OrderStatus.COMPLETED });
      await createTestOrder({ status: OrderStatus.COMPLETED });

      const response = await request(app)
        .get('/api/orders')
        .query({ status: OrderStatus.COMPLETED })
        .expect(200);

      expect(response.body.data.data).toHaveLength(2);
      response.body.data.data.forEach((order: any) => {
        expect(order.status).toBe(OrderStatus.COMPLETED);
      });
    });

    it('should combine filtering with pagination', async () => {
      // Create 5 PENDING orders
      for (let i = 0; i < 5; i++) {
        await createTestOrder({ status: OrderStatus.PENDING });
      }
      // Create 3 COMPLETED orders
      for (let i = 0; i < 3; i++) {
        await createTestOrder({ status: OrderStatus.COMPLETED });
      }

      const response = await request(app)
        .get('/api/orders')
        .query({ status: OrderStatus.PENDING, page: 1, page_size: 3 })
        .expect(200);

      expect(response.body.data.data).toHaveLength(3);
      expect(response.body.data.pagination).toMatchObject({
        page: 1,
        page_size: 3,
        total: 5,
        total_pages: 2,
      });
    });
  });
});
