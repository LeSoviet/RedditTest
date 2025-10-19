import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrder, useUpdateOrder } from '../hooks/useOrders';
import { OrderStatus, type UpdateOrderDTO, type OrderStatusType } from '@shared/types';

export default function EditOrderPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: order, isLoading } = useOrder(id!);
  const updateMutation = useUpdateOrder();

  const [formData, setFormData] = useState<UpdateOrderDTO>({
    customer_name: '',
    item: '',
    quantity: 1,
    status: OrderStatus.PENDING,
  });

  useEffect(() => {
    if (order) {
      setFormData({
        customer_name: order.customer_name,
        item: order.item,
        quantity: order.quantity,
        status: order.status,
      });
    }
  }, [order]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateMutation.mutateAsync({ id: id!, data: formData });
      alert('Order updated successfully!');
      navigate(`/orders/${id}`);
    } catch {
      alert('Error updating order');
    }
  };

  if (isLoading) return <div className="text-center py-12">Loading...</div>;
  if (!order) return <div className="card bg-red-50">Order not found</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Order</h1>

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
            />
          </div>

          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              required
              min="1"
              value={formData.quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                setFormData({ ...formData, quantity: Number.isNaN(v) ? 1 : v });
              }}
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
            <button type="submit" className="btn-primary" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => navigate(`/orders/${id}`)}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
