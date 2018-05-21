import actionTypes from '../action_types';
import { initialStates } from '../initial_states';

export default function store_details(state = initialStates.store_details, action) {
    switch (action.type) {
        case actionTypes.UPDATE_STORE_DETAILS:
            console.log(action.payload);
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
};
