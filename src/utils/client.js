import queryString from 'querystring';

export function concatUrl(...url) {
  return url.join('/');
}

export function createUrl(baseUrl, params) {
  return baseUrl.concat('?', queryString.stringify(params));
}
