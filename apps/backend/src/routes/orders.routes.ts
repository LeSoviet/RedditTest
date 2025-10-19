import { Router, type IRouter } from 'express';
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orders.controller';
import { validateUUID } from '../middleware/validateUUID';

const router: IRouter = Router();

/**
 * @route   GET /api/orders
 * @desc    Get paginated list of orders
 * @query   page, page_size, status
 */
router.get('/', getOrders);

/**
 * @route   GET /api/orders/:id
 * @desc    Get order by ID
 */
router.get('/:id', validateUUID('id'), getOrderById);

/**
 * @route   POST /api/orders
 * @desc    Create a new order
 */
router.post('/', createOrder);

/**
 * @route   PUT /api/orders/:id
 * @desc    Update order by ID
 */
router.put('/:id', validateUUID('id'), updateOrder);

/**
 * @route   DELETE /api/orders/:id
 * @desc    Delete order by ID
 */
router.delete('/:id', validateUUID('id'), deleteOrder);

export default router;
