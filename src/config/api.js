import axios from 'axios';

import * as CONSTANTS from './constants';

const method_types = {
	get: "GET",
	post: "POST",
	put: "PUT",
	delete: "DELETE"
}

function getHeaders() {
	let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
	let headers = {
		'Content-Type': 'application/json'
	};
	if (user && (user.uid || user._id) && user.hash) {
		headers.uid = user.uid || user._id;
		headers.hash = user.hash;
	}
	return headers;
}

function getMultipartHeaders() {
	let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
	let headers = {
		'content-type': 'multipart/form-data'
	};
	if (user && (user.uid || user._id) && user.hash) {
		headers.uid = user.uid || user._id;
		headers.hash = user.hash;
	}
	return headers;
}


function fetchDataAndProceed(url, method, data, callback){
	axios({
		method: method,
		params: method === 'GET' ? data : {},
		data: method !== 'GET' ? data : {},
		url: url,
		baseURL: CONSTANTS.base_url,
		headers: getHeaders(),
		validateStatus: function (status) {
			return ((status >= 200 && status < 300) || status === 412 || status === 401 || status === 403)
		},
	}).then(function (response) {
		if (response.status === 401 || response.status === 403) {
			localStorage.setItem('user', null);
			response.data.status = response.status;
			callback(true, response.data);
		}
		else {
			callback(false, response.data);
		}
	}).catch(function (error) {
		callback(true);
	});
}

function fileUploadAndProceed(url, method, data, callback) {
	axios({
		method: method,
		params: method === 'GET' ? data : {},
		data: method !== 'GET' ? data : {},
		url: url,
		baseURL: CONSTANTS.base_url,
		headers: getMultipartHeaders(),
		validateStatus: function (status) {
			return ((status >= 200 && status < 300) || status === 412 || status === 401 || status === 403)
		},
	}).then(function (response) {
		if (response.status === 401 || response.status === 403) {
			localStorage.setItem('user', null);
			response.data.status = response.status;
			callback(true, response.data);
		}
		else {
			callback(false, response.data);
		}
	}).catch(function (error) {
		callback(true);
	});
}

////////// General APIS /////////////
exports.getLocationFromIp = (data, callback) => {
	axios.get('https://freegeoip.net/json/')
		.then(function (response) {
			callback(false, response.data);
		})
		.catch(function (error) {
			callback(true, error);
		});
};

exports.createStore = (data, callback) => {
	fetchDataAndProceed('/stores', method_types.post, data, callback);
};

exports.uploadImage = (data, callback) => {
	let formData = new FormData();
	formData.append(data.key, data.value);
	fileUploadAndProceed('/medias/images', method_types.post, formData, callback);
};