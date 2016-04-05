import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import routes from './routes';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

window.addEventListener('DOMContentLoaded', () => {
  const $el = document.getElementById('app');
  const store = configureStore();
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>, $el);
});
