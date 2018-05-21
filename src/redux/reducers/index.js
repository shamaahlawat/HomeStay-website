import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_reducer';
import store_details from './store_reducer';

const rootReducer = combineReducers({
	page_details,
	store_details,
	routing: routerReducer
});

export default rootReducer;
