import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { continentsReducer, continentReducer } from './continents/reducerContinent';
import countriesReducer from './countries/reducerCountries';

const reducer = combineReducers({
  continentsReducer,
  continentReducer,
  countriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
