import axios from 'axios';
import queryString from 'querystring';

const { OPEN_CAGE_API, OPEN_CAGE_KEY } = process.env;

export function createUrl(baseUrl, params) {
  return `${baseUrl}?${queryString.stringify(params)}`;
}

export function getLocale(lat, lng) {
  if (!lat || !lng) return;

  const params = {
    q: `${lat},${lng}`,
    key: OPEN_CAGE_KEY,
  };

  return axios.get(createUrl(OPEN_CAGE_API, q)).then(({ data }) => {
    if (data?.results[0]?.components) {
      const { city, state } = data.results[0].components;
      return { city, state };
    }
    return data;
  });
}
