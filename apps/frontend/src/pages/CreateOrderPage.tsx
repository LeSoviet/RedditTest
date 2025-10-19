import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrder } from '../hooks/useOrders';
import { OrderStatus, type CreateOrderDTO, type OrderStatusType } from '@shared/types';

export default function CreateOrderPage() {
  const navigate = useNavigate();
  const createMutation = useCreateOrder();
  const [formData, setFormData] = useState<CreateOrderDTO>({
    customer_name: '',
    item: '',
    quantity: 1,
    status: OrderStatus.PENDING,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMutation.mutateAsync(formData);
      alert('Order created successfully!');
      navigate('/orders');
    } catch {
      alert('Error creating order');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Order</h1>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Customer Name</label>
            <input
              type="text"
              required
              value={formData.customer_name}
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              className="input"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="label">Item</label>
            <input
              type="text"
              required
              value={formData.item}
              onChange={(e) => setFormData({ ...formData, item: e.target.value })}
              className="input"
              placeholder="Product name"
            />
          </div>

          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              required
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
              className="input"
            />
          </div>

          <div>
            <label className="label">Status</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value as OrderStatusType })
              }
              className="input"
            >
              <option value={OrderStatus.PENDING}>Pending</option>
              <option value={OrderStatus.COMPLETED}>Completed</option>
              <option value={OrderStatus.CANCELLED}>Cancelled</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <button type="submit" className="btn-primary" disabled={createMutation.isPending}>
              {createMutation.isPending ? 'Creating...' : 'Create Order'}
            </button>
            <button type="button" onClick={() => navigate('/orders')} className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
