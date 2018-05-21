import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from './redux/store';
import AppRoutes from './config/routes';

const store = createStore()
export const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={AppRoutes} />
	</Provider>,
	document.getElementById('root')
);
