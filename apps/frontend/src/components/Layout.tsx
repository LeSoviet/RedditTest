import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/orders" className="text-2xl font-bold text-blue-600">
                📦 Order Management
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/orders"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/orders'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Orders List
              </Link>
              <Link to="/orders/new" className="btn-primary">
                + New Order
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Full-Stack Order Management System · Built by Daniel Khadour
          </p>
        </div>
      </footer>
    </div>
  );
}
