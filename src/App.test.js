import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';
// import App from './App';

// it('renders welcome message', () => {
//   render(<App />);
//   expect(screen.getByText('All Projects')).toBeInTheDocument();
// });

it('renders navbar', () => {
  render(<Navbar onNavChange={() => {}} value="All Projects" />);
  expect(screen.getByText('All Projects')).toBeInTheDocument();
});
