import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OrdersListPage from './pages/OrdersListPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import CreateOrderPage from './pages/CreateOrderPage';
import EditOrderPage from './pages/EditOrderPage';
import Layout from './components/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/orders" replace />} />
            <Route path="orders" element={<OrdersListPage />} />
            <Route path="orders/new" element={<CreateOrderPage />} />
            <Route path="orders/:id" element={<OrderDetailsPage />} />
            <Route path="orders/:id/edit" element={<EditOrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
