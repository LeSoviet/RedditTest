import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrdersListPage from '../OrdersListPage';

describe('OrdersListPage Component', () => {
  // Helper to render with necessary providers
  const renderWithProviders = (component: React.ReactElement) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    return render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{component}</BrowserRouter>
      </QueryClientProvider>
    );
  };

  it('should render the component without errors', () => {
    renderWithProviders(<OrdersListPage />);
    
    // Verify component renders and shows loading
    expect(screen.getByText(/Loading orders.../i)).toBeTruthy();
  });

  it('should show loading state initially', () => {
    renderWithProviders(<OrdersListPage />);
    
    // Verify it shows loading
    const loadingElement = screen.getByText(/Loading orders.../i);
    expect(loadingElement).toBeTruthy();
  });
});
