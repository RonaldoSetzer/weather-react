import axios from 'axios';
import queryString from 'querystring';

const { CORS, BING_URL, BING_IMAGE_OF_DAY_API } = process.env;

export function createUrl(baseUrl, params) {
  return `${baseUrl}?${queryString.stringify(params)}`;
}

export function getImageOfDay() {
  const params = {
    format: 'js',
    idx: 0,
    n: 1,
    mkt: 'pt-BR',
  };

  const url = createUrl(`${CORS}/${BING_URL}/${BING_IMAGE_OF_DAY_API}`, params);

  return axios
    .get(url, {
      headers: {
        Origin: 'x-requested-with',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(({ data }) => {
      const { url } = data.images[0];
      const result = { url: `${BING_URL}${url}` };
      return result;
    });
}
