import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './utils/Store';

test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/Quote Cards/i);
  expect(headerElement).toBeInTheDocument();
});
