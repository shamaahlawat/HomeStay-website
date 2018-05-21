import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/index';

export default function createStore() {
	return _createStore(
		rootReducer,
		compose(
			applyMiddleware(ReduxThunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);
}
