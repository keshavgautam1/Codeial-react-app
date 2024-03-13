export * from './constants.js';

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('can not store in LS');
  }
  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('can not get the value from LS');
  }

  return localStorage.getItem(key);
};
export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('can not get the value from LS');
  }

  localStorage.removeItem(key);
};

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // 'a b' => 'a%20b'

    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); // 'username=abc&password=123'
};
