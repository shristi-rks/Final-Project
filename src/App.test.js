import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mind matters link', () => {
  render(<App />);
  const linkElement = screen.getByText(/mind matters/i);
  expect(linkElement).toBeInTheDocument();
});
