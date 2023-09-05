import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/pages/Navbar';

it('should render Navbar Items', () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  const Navlinks = screen.getByText(/COVID/i);
  expect(Navlinks).toBeInTheDocument();
});

it('should render Navbar Item', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
