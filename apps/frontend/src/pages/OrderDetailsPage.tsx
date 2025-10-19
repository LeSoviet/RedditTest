import { useParams, Link, useNavigate } from 'react-router-dom';
import { useOrder, useDeleteOrder } from '../hooks/useOrders';
import StatusBadge from '../components/StatusBadge';
import ConfirmDialog from '../components/ConfirmDialog';

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: order, isLoading, error } = useOrder(id!);
  const deleteMutation = useDeleteOrder();

  if (isLoading) return <div className="text-center py-12">Loading...</div>;
  if (error || !order) return <div className="card bg-red-50">Order not found</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <Link to="/orders" className="text-blue-600 hover:underline">
          ← Back to List
        </Link>
      </div>

      <div className="card">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Order ID</dt>
            <dd className="mt-1 text-sm text-gray-900 font-mono">{order.id}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
            <dd className="mt-1 text-lg text-gray-900">{order.customer_name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Item</dt>
            <dd className="mt-1 text-lg text-gray-900">{order.item}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Quantity</dt>
            <dd className="mt-1 text-lg text-gray-900">{order.quantity}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1">
              <StatusBadge status={order.status} />
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Created At</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {new Date(order.created_at).toLocaleString()}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex space-x-3">
          <Link to={`/orders/${id}/edit`} className="btn-primary">
            Edit Order
          </Link>
          <ConfirmDialog
            trigger={(onClick) => (
              <button onClick={onClick} className="btn-danger">
                Delete Order
              </button>
            )}
            title="Delete Order"
            message="Delete this order permanently?"
            confirmLabel="Delete"
            onConfirm={async () => {
              await deleteMutation.mutateAsync(id!);
              navigate('/orders');
            }}
          />
        </div>
      </div>
    </div>
  );
}
