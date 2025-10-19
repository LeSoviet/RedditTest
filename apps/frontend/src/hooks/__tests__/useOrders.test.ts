import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useOrders } from '../useOrders';
import React, { type ReactNode } from 'react';

describe('useOrders Hook', () => {
  let queryClient: QueryClient;

  // Helper to create wrapper with React Query
  const createWrapper = () => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // Don't retry in tests
        },
      },
    });

    return ({ children }: { children: ReactNode }) =>
      React.createElement(QueryClientProvider, { client: queryClient }, children);
  };

  beforeEach(() => {
    // Clear all mocks before each test
    if (queryClient) {
      queryClient.clear();
    }
  });

  it('should return initial state correctly', () => {
    const { result } = renderHook(() => useOrders({}), {
      wrapper: createWrapper(),
    });

    // Initial state should be loading
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();
  });

  it('should accept pagination parameters', async () => {
    const { result } = renderHook(
      () =>
        useOrders({
          page: 2,
          page_size: 20,
        }),
      {
        wrapper: createWrapper(),
      }
    );

    // Verify hook initializes correctly with parameters
    expect(result.current.isLoading).toBe(true);
    
    // Wait for loading to finish (may fail if backend is not running)
    await waitFor(
      () => {
        expect(result.current.isLoading).toBe(false);
      },
      { timeout: 5000 }
    );
  });

  it('should accept status filter', async () => {
    const { result } = renderHook(
      () =>
        useOrders({
          status: 'PENDING',
        }),
      {
        wrapper: createWrapper(),
      }
    );

    expect(result.current.isLoading).toBe(true);
    
    await waitFor(
      () => {
        expect(result.current.isLoading).toBe(false);
      },
      { timeout: 5000 }
    );
  });
});
