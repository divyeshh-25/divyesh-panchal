import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the hero heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByText(/Building digital/i);
  expect(heading).toBeInTheDocument();
});
