import axios from 'axios';

import { createUrl } from '../utils/client';

const { OPEN_CAGE_API, OPEN_CAGE_KEY } = process.env;

export function getLocale(lat, lng) {
  if (!lat || !lng) return;

  const params = {
    q: [lat, lng].join(','),
    key: OPEN_CAGE_KEY,
  };

  const url = createUrl(OPEN_CAGE_API, params);

  return axios.get(url).then(({ data }) => {
    if (data?.results[0]?.components) {
      const { city, state } = data.results[0].components;

      return { city, state };
    }
    return data;
  });
}
