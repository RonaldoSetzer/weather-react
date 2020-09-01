import axios from 'axios';

const CORS = 'http://localhost:3001';
const BING_URL = 'https://www.bing.com';
const BING_IMAGE_OF_DAY_API =
  'HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

export function getImageOfDay() {
  return axios
    .get(`${CORS}/${BING_URL}/${BING_IMAGE_OF_DAY_API}`, {
      headers: {
        Origin: 'x-requested-with',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(({ data }) => {
      const { url } = data.images.pop();
      const result = { url: `${BING_URL}${url}` };
      return result;
    });
}
