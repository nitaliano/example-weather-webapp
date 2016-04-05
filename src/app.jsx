import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import WeatherList from './components/WeatherList';
import WeatherDetails from './components/WeatherDetails';
import configureStore from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

window.addEventListener('DOMContentLoaded', () => {
  const $el = document.getElementById('app');
  const store = configureStore();
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={WeatherList} />
          <Route path="details" component={WeatherDetails} />
        </Route>
      </Router>
    </Provider>, $el);
});
