import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from '../App';

const middlewares = [logger, thunk];
const mockStore = configureStore(middlewares);

it('should render App Component', () => {
  const initialState = { cases: 567465, continent: 'Europe', countries: ['Germany', 'Netherlands'] };
  const store = mockStore({ continentReducer: initialState });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const textElement = screen.getByText(/Global Pandemic/i);
  expect(textElement).toBeInTheDocument();
});

test('Should Render App Component', () => {
  const initialState = { cases: 758746, continent: 'North America', countries: ['USA', 'Canada'] };
  const store = mockStore({ continentReducer: initialState });
  const tree = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
