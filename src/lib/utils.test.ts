import { expect, test } from 'vitest';
import { cn } from './utils';

test('cn should merge and dedupe classes', () => {
  expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  expect(cn('p-4', 'p-2')).toBe('p-2');
  expect(cn('text-center', 'text-left')).toBe('text-left');
  expect(cn('text-sm', { 'text-lg': true })).toBe('text-lg');
  expect(cn('text-sm', { 'text-lg': false })).toBe('text-sm');
  expect(cn('font-bold', null, undefined, 'font-normal')).toBe('font-normal');
});
