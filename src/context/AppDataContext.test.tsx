import { render, screen, waitFor } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import { AppDataProvider, useAppData } from './AppDataContext';
import * as api from '../services/api';
import { act } from 'react';

// Mock the API functions
vi.mock('../services/api', () => ({
  getUser: vi.fn(),
  getWallet: vi.fn(),
  getTransactions: vi.fn(),
}));

const mockUser = { first_name: 'John', last_name: 'Doe', email: 'john@doe.com' };
const mockWallet = { balance: 1000, total_payout: 500, total_revenue: 1500, pending_payout: 200, ledger_balance: 1200 };
const mockTransactions = [
  { amount: 100, metadata: {}, status: 'successful', type: 'deposit', date: '2022-01-01' },
];

function TestComponent() {
  const { data, isLoading, error } = useAppData();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data.user?.first_name}</div>;
}

test('AppDataProvider fetches and provides data', async () => {
  (api.getUser as vi.Mock).mockResolvedValue(mockUser);
  (api.getWallet as vi.Mock).mockResolvedValue(mockWallet);
  (api.getTransactions as vi.Mock).mockResolvedValue(mockTransactions);

  render(
    <AppDataProvider>
      <TestComponent />
    </AppDataProvider>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
