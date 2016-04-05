import React from 'react';
import App from './components/App';
import WeatherList from './components/WeatherList';
import WeatherDetails from './components/WeatherDetails';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WeatherList} />
    <Route path="details" component={WeatherDetails} />
  </Route>
);

export default routes;
