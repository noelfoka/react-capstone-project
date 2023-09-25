import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Continents from '../components/Continents/Continents';

const applyMiddleware = [thunk];
const mockStore = configureStore(applyMiddleware);
const continentsAction = () => ({ type: 'GET_CONTINENTS' });

function getContinents() {
  return (dispatch) => Promise.resolve(dispatch(continentsAction()));
}

test('should render mock Continent', () => {
  const store = mockStore();
  store.dispatch(getContinents())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(continentsAction());
    });
});

test('Should render mock Continent(Africa)', () => {
  const initialState = [{ cases: 23415, continent: 'Africa', countries: ['Ghana', 'Algeria'] }];
  const store = mockStore(initialState);

  const tree = render(
    <Provider store={store}>
      <Router>
        <Continents />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
