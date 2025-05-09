import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Corrected import
import ProductList from './ProductList';

test('renders pagination buttons and navigates pages', () => {
  render(<ProductList />);

  // Check if the pagination buttons are rendered
  const nextButton = screen.getByText(/Siguiente/i);
  const prevButton = screen.getByText(/Anterior/i);

  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();

  // Simulate clicking the "Siguiente" button
  fireEvent.click(nextButton);

  // Add assertions to check if the page content changes
  // This will depend on how your component updates the page content
});