import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  var obj;
  if(options){
    obj = [];
    for(var i in options){
      obj.push(`${i}=${options[i]}`);
    }
  }
  if(obj){
    options = obj.join('&');
  }
  return fetch(url, {
      method: 'POST',
      mode: "no-cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:options
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch(err=>console.log('err = ',err));
}
