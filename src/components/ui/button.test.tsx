import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Button } from './button';

test('Button renders with correct text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByRole('button', { name: /Click me/i });
  expect(buttonElement).toBeInTheDocument();
});

test('Button renders as a child component', () => {
  render(
    <Button asChild>
      <a href="/">Link</a>
    </Button>
  );
  const linkElement = screen.getByRole('link', { name: /Link/i });
  expect(linkElement).toBeInTheDocument();
});
