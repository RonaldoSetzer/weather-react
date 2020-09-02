import axios from 'axios';
import queryString from 'querystring';

const OPENCAGE_API = 'https://api.opencagedata.com/geocode/v1/json';
const OPENCAGE_KEY = 'c63386b4f77e46de817bdf94f552cddf';

function createUrl(baseUrl, params) {
  return `${baseUrl}?${queryString.stringify(params)}`;
}

export function getLocale(lat, lng) {
  if (!lat || !lng) return;

  const params = {
    q: `${lat},${lng}`,
    key: OPENCAGE_KEY,
  };

  return axios.get(createUrl(OPENCAGE_API, q)).then(({ data }) => {
    if (data?.results[0]?.components) {
      const { city, state } = data.results[0].components;
      return { city, state };
    }
    return data;
  });
}
