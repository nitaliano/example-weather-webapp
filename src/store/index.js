import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import header from '../reducers/header';
import weather from '../reducers/weather';
import details from '../reducers/details';
import settings from '../reducers/settings';

export default function (initialState) {
  const rootReducer = combineReducers({
    header: header,
    weather: weather,
    details: details,
    settings: settings,
    routing: routerReducer
  });

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk)
  ));

  return store;
}
