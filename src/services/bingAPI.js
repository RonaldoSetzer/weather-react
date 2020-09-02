import axios from 'axios';

import { createUrl, concatUrl } from '../utils/client';

const { CORS, BING_URL, BING_IMAGE_OF_DAY_API } = process.env;

export function getImageOfDay() {
  const params = {
    format: 'js',
    idx: 0,
    n: 1,
    mkt: 'pt-BR',
  };

  const url = createUrl(
    concatUrl(CORS, BING_URL, BING_IMAGE_OF_DAY_API),
    params,
  );

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  return axios.get(url, { headers }).then(({ data }) => {
    const url = data?.images[0]?.url;
    const result = { url: concatUrl(BING_URL, url) };
    return result;
  });
}
