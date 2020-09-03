import axios from 'axios';

import { createUrl } from '../utils/client';

const { OPEN_CAGE_API, OPEN_CAGE_KEY } = process.env;

export function getLocale(latitude, longitude) {
  if (!latitude || !longitude) return;

  const params = {
    q: [latitude, longitude].join(','),
    key: OPEN_CAGE_KEY,
  };

  const url = createUrl(OPEN_CAGE_API, params);

  return axios.get(url).then(({ data }) => {
    if (data?.results[0]?.components) {
      const { city, state } = data.results[0].components;

      return { city, state, address: [city, state].join(', ') };
    }
    return data;
  });
}
