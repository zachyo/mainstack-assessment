import { expect, test } from 'vitest';
import {
  formatCurrencyUSD,
  formatDateLabel,
  formatUserFullName,
  getInitials,
} from './format';
import { User } from '../types/api';

test('formatCurrencyUSD should format numbers correctly', () => {
  expect(formatCurrencyUSD(10000)).toBe('$10,000');
  expect(formatCurrencyUSD(10000.00)).toBe('$10,000');
  expect(formatCurrencyUSD(10000.50)).toBe('$10,000.50');
  expect(formatCurrencyUSD(0)).toBe('$0');
  expect(formatCurrencyUSD(-500)).toBe('-$500');
});

test('formatDateLabel should format date strings correctly', () => {
  expect(formatDateLabel('2022-04-03')).toBe('Apr 03,2022');
  expect(formatDateLabel('2022-04-03T10:00:00Z')).toBe('Apr 03,2022');
  expect(formatDateLabel('invalid-date')).toBe('invalid-date');
});

test('formatUserFullName should format user names correctly', () => {
  const user1: User = { first_name: 'John', last_name: 'Doe', email: 'john@doe.com' };
  expect(formatUserFullName(user1)).toBe('John Doe');

  expect(formatUserFullName(null)).toBe('User');
  expect(formatUserFullName(undefined)).toBe('User');
});

test('getInitials should get user initials correctly', () => {
  const user1: User = { first_name: 'John', last_name: 'Doe', email: 'john@doe.com' };
  expect(getInitials(user1)).toBe('JD');

  expect(getInitials(null)).toBe('NA');
  expect(getInitials(undefined)).toBe('NA');
});
