import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import { FilterModal } from './FilterModal';

const mockOnOpenChange = vi.fn();
const mockOnApply = vi.fn();

const defaultProps = {
  open: true,
  onOpenChange: mockOnOpenChange,
  onApply: mockOnApply,
};

test('FilterModal renders when open', () => {
  render(<FilterModal {...defaultProps} />);
  expect(screen.getByText('Filter')).toBeInTheDocument();
});

test('Clear button resets filters', () => {
  render(<FilterModal {...defaultProps} />);
  
  const clearButton = screen.getByRole('button', { name: /Clear/i });
  fireEvent.click(clearButton);

  // After clearing, the button text should change to "Select transaction types"
  const transactionTypeButton = screen.getByText("Select transaction types");
  fireEvent.click(transactionTypeButton);
  
  const storeTransactionsCheckbox = screen.getByLabelText('Store Transactions');
  expect(storeTransactionsCheckbox).not.toBeChecked();
});

test('Apply button is disabled when no filters are selected', () => {
    render(<FilterModal {...defaultProps} />);
    
    const clearButton = screen.getByRole('button', { name: /Clear/i });
    fireEvent.click(clearButton);

    const applyButton = screen.getByRole('button', { name: /Apply/i });
    expect(applyButton).toBeDisabled();
});

test('Apply button is enabled when filters are selected', () => {
  render(<FilterModal {...defaultProps} />);
  
  // by default some filters are selected
  const applyButton = screen.getByRole('button', { name: /Apply/i });
  expect(applyButton).not.toBeDisabled();
});

test('onApply is called with correct filters', () => {
  render(<FilterModal {...defaultProps} />);
  
  const applyButton = screen.getByRole('button', { name: /Apply/i });
  fireEvent.click(applyButton);

  expect(mockOnApply).toHaveBeenCalled();
  // We can also check the arguments if we know the default state
  expect(mockOnApply).toHaveBeenCalledWith(expect.objectContaining({
    transactionTypes: expect.any(Array),
    transactionStatus: expect.any(Array),
  }));
});
