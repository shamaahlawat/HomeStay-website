import { browserHistory } from 'react-router';

import actionTypes from '../action_types';
import * as API from '../../config/api';

export function updateStoreDetails(data) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.UPDATE_STORE_DETAILS,
            payload: data
        })
    }
}

export function createStore(data) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SHOW_FULL_PAGE_LOADER,
        });

        API.createStore(data, function (err, res) {
            if(!err){
                dispatch({
                    type: actionTypes.UPDATE_STORE_DETAILS,
                    payload: res.data
                });
                browserHistory.push('/congrats');
            } else{

            }
            dispatch({
                type: actionTypes.HIDE_FULL_PAGE_LOADER,
            });
        });
    }
}

export function uploadStoreImage(data, type) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SHOW_FULL_PAGE_LOADER,
        });

        API.uploadImage(data, function (err, res) {
            if(!err){
                dispatch({
                    type: actionTypes.UPDATE_STORE_DETAILS,
                    payload: {[type]: res.urls[0]}
                });
            } else{

            }
            dispatch({
                type: actionTypes.HIDE_FULL_PAGE_LOADER,
            });
        });
    }
}
