import fetch from 'isomorphic-fetch';
import constants from 'shared/constants';

const apiBaseUrl = constants.BASE_API_ENDPOINT;

function getUrl(url) {
  const pattern = /^((http|https):\/\/)/;
  return pattern.test(url) ? url : apiBaseUrl + url;
}

function checkStatus(response) {
  if (response.ok && response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText || response.status);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default function call(url, options = {}) {
  const newOptions = options;

  newOptions.headers = Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }, newOptions.headers || {});

  if (typeof newOptions.body !== 'string') {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  newOptions.credentials = 'same-origin';
  newOptions.method = newOptions.method || 'get';

  return fetch(getUrl(url), newOptions)
    .then(checkStatus)
    .then(parseJSON);
}
